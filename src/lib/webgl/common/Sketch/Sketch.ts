import { RefObject, useRef } from "react";
import {
	Mesh,
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Geometry } from "../../../../interfaces/Geometry.interface";

export default class Sketch {
	private width: number;
	private height: number;

	private ref: RefObject<HTMLCanvasElement>;
	private canvas!: HTMLCanvasElement;
	private scene: Scene;
	private camera: PerspectiveCamera;
	private renderer!: WebGLRenderer;
	private controls!: OrbitControls;
	private objects: Geometry[] = [];

	constructor(options: { width: number; height: number }) {
		this.ref = useRef<HTMLCanvasElement>(null);
		this.scene = new Scene();
		this.width = options.width;
		this.height = options.height;

		this.camera = new PerspectiveCamera(70, this.width / this.height, 0.01, 10);
		this.camera.position.z = 1;
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
	}

	init(): void {
		this.canvas = this.ref.current as HTMLCanvasElement;
		this.renderer = new WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
		});
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
	}

	render(value: number): void {
		this.objects.forEach((object) => object.update(value));
		this.controls.update();
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
	}
	getRef(): RefObject<HTMLCanvasElement> {
		return this.ref;
	}

}
