import Sketch from "../lib/webgl/common/Sketch";
import useResizeCanvas from "./useResizeCanvas";
import useAnimateCanvas from "./useAnimateCanvas";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const sketch = useAnimateCanvas(useResizeCanvas(new Sketch({width, height})));
	return sketch;
}
