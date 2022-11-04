import { useEffect, useRef } from "react";
import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const ref = useRef<HTMLCanvasElement>(null);
	let renderer: WebGLRenderer,
		mesh: Mesh,
		scene: Scene,
		camera: PerspectiveCamera;

	useEffect(() => {
		const canvas = ref.current as HTMLCanvasElement;
		camera = new PerspectiveCamera(70, width / height, 0.01, 10);
		camera.position.z = 1;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		scene = new Scene();
		const geometry = new BoxGeometry(0.2, 0.2, 0.2);
		const material = new MeshNormalMaterial();
		mesh = new Mesh(geometry, material);
		scene.add(mesh);
		renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
		renderer.setAnimationLoop(animation);
	}, []);

	function animation(time: number) {
		mesh.rotation.x = time / 2000;
		mesh.rotation.y = time / 2000;
		renderer.render(scene, camera);
	}

	return ref;
}
