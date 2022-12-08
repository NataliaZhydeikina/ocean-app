import { useEffect, useRef } from "react";
import Sketch from "../models/Sketch";
import useResizeCanvas from "./useResizeCanvas";
import useAnimateCanvas from "./useAnimateCanvas";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const sketch = useAnimateCanvas(useResizeCanvas(new Sketch({width, height})));

	useEffect(() => {
		sketch.init();
	}, []);

	return sketch.getRef();
}
