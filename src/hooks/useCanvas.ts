import Sketch from "../lib/webgl/common/Sketch";
import useEventListenerCanvas from "./useEventListenerCanvas";
import useAnimateCanvas from "./useAnimateCanvas";

export default function useCanvas(width = innerWidth, height = innerHeight) {
	const sketch = useAnimateCanvas(useEventListenerCanvas(new Sketch({width, height})));
	return sketch;
}
