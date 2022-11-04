import { RefObject, useRef } from "react";
import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial,
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
} from "three";

export default class Sketch {
	private time: number;
	private width: number;
	private height: number;

	private ref: RefObject<HTMLCanvasElement>;
	private canvas!: HTMLCanvasElement;
	private scene: Scene;
	private camera: PerspectiveCamera;
	private renderer!: WebGLRenderer;
	private geometry!: BoxGeometry;
	private material!: MeshNormalMaterial;
	private mesh!: Mesh;

	constructor(options: { width: number; height: number }) {
		this.ref = useRef<HTMLCanvasElement>(null);
		this.time = 0;
		this.scene = new Scene();

		this.width = options.width;
		this.height = options.height;

		this.camera = new PerspectiveCamera(70, this.width / this.height, 0.01, 10);
		this.camera.position.z = 1;
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
	}

	init() {
		this.canvas = this.ref.current as HTMLCanvasElement;
		this.renderer = new WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
		});
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

		this.addObjects();
		this.render();
	}

	render() {
		this.time += 0.05;

		this.mesh.rotation.x = this.time / 2000;
		this.mesh.rotation.y = this.time / 2000;
		this.renderer.render(this.scene, this.camera);

		//requestAnimationFrame(this.render);
	}

	resize() {}

	addObjects() {
		this.geometry = new BoxGeometry(0.2, 0.2, 0.2);
		this.material = new MeshNormalMaterial();

		this.mesh = new Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);
	}
	getRef() {
		return this.ref;
	}
}
