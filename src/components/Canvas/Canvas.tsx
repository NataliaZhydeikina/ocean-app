import "./Canvas.css";
import useCanvas from "../../hooks/useCanvas";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Sketch from "../../lib/webgl/common/Sketch";
import { ScrollContext } from "../Scroll/Scroll";

export const CanvasContext = createContext<Sketch>({} as Sketch);

interface Props {
    children?: ReactNode
}

function Canvas({ children }: Props) {
	const [sketch, setSketch] = useState(useCanvas());
	const scroll = useContext(ScrollContext);
    
	useEffect(() => {
		console.log(scroll)
		setSketch(sketch.init());
	}, []);

	return <CanvasContext.Provider value={sketch}>
		<canvas ref={sketch.getRef()}>{ children }</canvas>
	</CanvasContext.Provider>;
}

export default Canvas;
