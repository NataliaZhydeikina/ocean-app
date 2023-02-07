import { useEffect, useRef } from "react";
import { Clock } from "three";
import Sketch from "../lib/webgl/common/Sketch";

export default function useAnimateCanvas(sketch: Sketch) {
  const clock = new Clock();
  const requestRef = useRef(0);

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    sketch.render(elapsedTime);
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
