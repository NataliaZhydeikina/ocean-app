import { useEffect } from "react";
import Sketch from "../models/Sketch";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const sketch = new Sketch({ width, height });

	useEffect(() => {
		sketch.init();
	});

	return sketch.getRef();
}
