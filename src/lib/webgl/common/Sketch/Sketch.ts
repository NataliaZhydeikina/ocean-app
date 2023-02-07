import { createRef, RefObject } from "react";
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Geometry } from "../../../../interfaces/Geometry.interface";

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
	}
	
	addObject(object: Geometry): void {
		this.objects.push(object);
		this.scene.add(object.get());
		if(this.renderer)
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
