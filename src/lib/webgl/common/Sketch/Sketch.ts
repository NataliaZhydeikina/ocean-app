import { createRef, RefObject } from "react";
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	Raycaster,
	Vector2,
	Mesh
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Geometry } from "../../../../interfaces/Geometry.interface";
import Material from "../Material";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import cnoise from "../../shaders/cnoise.glsl";

export default class Sketch {
	private width: number;
	private height: number;

	private ref: RefObject<HTMLCanvasElement>;
	private scene: Scene;
	private camera: PerspectiveCamera;
	private renderer!: WebGLRenderer;
	private controls!: OrbitControls;
	private objects: Geometry[] = [];
	private scroll?: number;
	private raycaster: Raycaster;
	private mouse: Vector2;
	composer!: EffectComposer;
	renderPass!: RenderPass;
	myEffect!: { 
		uniforms: { tDiffuse: { value: null; }; scrollSpeed: { value: null; }; time: { value: null; }; }; 
	    vertexShader: string; 
		fragmentShader: string; 
	};
	customPass!: ShaderPass;
	speedTarget?: number;

	constructor(options: { width: number; height: number }) {
		this.ref = createRef();
		this.scene = new Scene();
		this.width = options.width;
		this.height = options.height;

		this.camera = new PerspectiveCamera(70, this.width / this.height, 100, 2000);
		this.camera.position.z = 600;
		this.camera.fov = 2*Math.atan((this.height/2)/600)*(180/Math.PI);
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
		this.raycaster = new Raycaster();
        this.mouse = new Vector2();
	}

	init(): Sketch {
		if(!this.ref || !this.ref.current) return this;
		this.renderer = new WebGLRenderer({
			canvas: this.ref.current,
			antialias: true,
			alpha: true
		});
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		//this.renderer.render(this.scene, this.camera);
		this.composerPass();
		this.composer.render();
		return this;
	}

	render(value?: number): void {
		if(value) this.objects.forEach((object) => object.update(value));
		this.customPass.uniforms.scrollSpeed.value = this.speedTarget;
		this.customPass.uniforms.time.value = value;
		//this.renderer.render(this.scene, this.camera);
		this.composer.render();
	}
	composerPass(){
		this.composer = new EffectComposer(this.renderer);
		this.renderPass = new RenderPass(this.scene, this.camera);
		this.composer.addPass(this.renderPass);
		//custom shader pass
		let counter = 0.0;
		this.myEffect = {
		  uniforms: {
			"tDiffuse": { value: null },
			"scrollSpeed": { value: null },
			"time": { value: null },
		  },
		  vertexShader: `
		  varying vec2 vUv;
		  void main() {
			vUv = uv;
			gl_Position = projectionMatrix 
			  * modelViewMatrix 
			  * vec4( position, 1.0 );
		  }
		  `,
		  fragmentShader: `
		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float scrollSpeed;
        uniform float time;
        ${cnoise}
        void main(){
          vec2 newUV = vUv;
          float area = smoothstep(1.,0.8,vUv.y)*2. - 1.;
          float area1 = smoothstep(0.4,0.0,vUv.y);
          area1 = pow(area1,4.);
          float noise = 0.5*(cnoise(vec3(vUv*10.,time)) + 1.);
          float n = smoothstep(0.5,0.51, noise + area/2.);
          newUV.x -= (vUv.x - 0.5)*0.1*area1*scrollSpeed;
          gl_FragColor = texture2D( tDiffuse, newUV);
          gl_FragColor = mix(vec4(1.),texture2D( tDiffuse, newUV),n);
        }`
		}
		this.customPass = new ShaderPass(this.myEffect);
		this.customPass.renderToScreen = true;
		this.composer.addPass(this.customPass);
	}
	resize(width: number, height: number): void {
		this.width = width;
		this.height = height;
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));	
		this.objects.forEach((object) => object.resize());
	}
	
	mouseMovement(event: MouseEvent) {
		this.mouse = new Vector2((event.clientX / this.width)*2-1, -(event.clientY/this.height)*2+1);
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const intersects = this.raycaster.intersectObjects(this.scene.children);
		if(intersects.length>0){
			const material = (intersects[0].object as Mesh).material as Material;
			material.uniforms.hoverState.value = 1;
			material.uniforms.hover.value = intersects[0].uv;
		}
	}
	addObject(object: Geometry): void {
		this.objects.push(object);
		this.scene.add(object.get());
		if(this.renderer)
		//this.renderer.render(this.scene, this.camera);
		this.composer.render();
	}
	removeObject(object: Geometry): void {
		this.objects = this.objects.filter(obj=>obj!==object);
		this.scene.remove(object.get());
		//this.renderer.render(this.scene, this.camera);
		this.composer.render();
	}
	getRef(): RefObject<HTMLCanvasElement> {
		return this.ref;
	}
	getSize():[number, number] {
		return [this.width, this.height];
	}
	getScroll(): number {
		return this.scroll || 0;
	}
	setScroll(scroll: number, speedTarget: number) {
		this.scroll = scroll;
		this.speedTarget = speedTarget;
	}
}
