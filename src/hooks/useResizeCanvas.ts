import { useEffect } from "react";
import Sketch from "../models/SketchModel";

export default function useResizeCanvas(sketch:Sketch) {
	useEffect(() => {
		function handleResize() {
			sketch.resize(innerWidth, innerHeight);
		}
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
  }, []);
  return sketch;
}
