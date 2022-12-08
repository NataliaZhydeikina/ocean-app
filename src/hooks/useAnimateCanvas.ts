import { useEffect, useRef } from "react";
import Sketch from "../models/Sketch";

export default function useAnimateCanvas(sketch:Sketch) {
	const requestRef = useRef(0);
  const animate = (time: number) => {
    sketch.render();
    requestRef.current = requestAnimationFrame(animate);
  }
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(requestRef.current);
		}
	}, []);

	return sketch;
}
