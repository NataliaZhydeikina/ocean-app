import { useEffect, useRef } from "react";
import SketchModel from "../models/SketchModel";
import useResizeCanvas from "./useResizeCanvas";
import useAnimateCanvas from "./useAnimateCanvas";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const sketch = useAnimateCanvas(useResizeCanvas(new SketchModel({width, height})));

	useEffect(() => {
		sketch.init();
	}, []);

	return sketch;
}
