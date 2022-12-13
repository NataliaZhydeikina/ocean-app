import "./Canvas.css";
import useCanvas from "../../hooks/useCanvas";
import { createContext, ReactNode } from "react";
import Sketch from "../../services/Sketch";

export const CanvasContext = createContext<Sketch>({} as Sketch);

interface Props {
    children?: ReactNode
}

function Canvas({ children }: Props) {
	const sketch = useCanvas();
	return <CanvasContext.Provider value={sketch}>
		<canvas ref={sketch.getRef()}>{ children }</canvas>
	</CanvasContext.Provider>;
}

export default Canvas;
