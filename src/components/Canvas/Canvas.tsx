import "./Canvas.css";
import useCanvas from "../../hooks/useCanvas";

function Canvas() {
	const ref = useCanvas();

	return <canvas ref={ref}></canvas>;
}

export default Canvas;
