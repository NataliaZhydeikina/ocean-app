import { useContext, useEffect, useRef } from "react";
import { Clock } from "three";
import { ScrollContext } from "../components/Scroll/Scroll";
import Scroll from "../lib/ui/Scroll";
import Sketch from "../lib/webgl/common/Sketch";

export default function useAnimateCanvas(sketch: Sketch) {
  const clock = new Clock();
  const scroll = useContext<Scroll>(ScrollContext);  
  
  const animate = () => {
    sketch.setScroll(scroll.scrollToRender);
    const elapsedTime = clock.getElapsedTime();
    sketch.render(elapsedTime);
  }
  useEffect(() => {
    scroll.setCallback(animate);
  }, []);

	return sketch;
}
