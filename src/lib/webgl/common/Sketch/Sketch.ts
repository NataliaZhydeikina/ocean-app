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
		this.renderer.render(this.scene, this.camera);
		return this;
	}

	render(value?: number): void {
		if(value) this.objects.forEach((object) => object.update(value));
		this.renderer.render(this.scene, this.camera);
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
		this.renderer.render(this.scene, this.camera);
	}
	removeObject(object: Geometry): void {
		this.objects = this.objects.filter(obj=>obj!==object);
		this.scene.remove(object.get());
		this.renderer.render(this.scene, this.camera);
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
	setScroll(scroll: number) {
		this.scroll = scroll;
	}
}
