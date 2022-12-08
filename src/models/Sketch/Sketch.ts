import { RefObject, useRef } from "react";
import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial,
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
	private controls!: OrbitControls;

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
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;

		this.addObjects();
		this.render();

		this.resize = this.resize.bind(this);
		this.render = this.render.bind(this);
	}

	render() {
		this.time += 0.05;

		this.mesh.rotation.x = this.time / 2000;
		this.mesh.rotation.y = this.time / 2000;
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}

	resize(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));	
		
		this.render();
	}

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
