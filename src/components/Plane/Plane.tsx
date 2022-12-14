import { useContext, useEffect } from "react";
import PlaneObject from "../../lib/webgl/common/Plane";
import Sketch from "../../lib/webgl/common/Sketch";
import { CanvasContext } from "../Canvas";

interface Props {
  position?: {
    x?: number,
    y?: number,
    z?: number
  }
}

function Plane({position={ x:0, y:0, z:0 }}: Props) {
  const sketch = useContext<Sketch>(CanvasContext);  
  const plane = new PlaneObject(1., 1.);

  useEffect(() => {
    const { x=0, y=0, z=0 } = position;
    plane.setPosition(x, y, z);
    sketch.addObject(plane);
  }, []);

	return <></>;
}

export default Plane;
