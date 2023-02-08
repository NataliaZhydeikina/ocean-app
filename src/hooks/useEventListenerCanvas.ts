import { useEffect } from "react";
import Sketch from "../lib/webgl/common/Sketch";

export default function useEventListenerCanvas(sketch: Sketch) {
	useEffect(() => {
		function handleResize() {
			sketch.resize(innerWidth, innerHeight);
		}
		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", (event)=>sketch.mouseMovement(event));
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', (event)=>sketch.mouseMovement(event));
		}
  }, []);
  return sketch;
}
