import { useContext, useEffect } from "react";
import PlaneObject from "../../lib/webgl/common/Plane";
import Sketch from "../../lib/webgl/common/Sketch";
import { CanvasContext } from "../Canvas";

interface Props {
  position?: [
    x?: number,
    y?: number,
    z?: number
  ],
  rotation?: [
    x?: number,
    y?: number,
    z?: number
  ],
  size?: [
    width: number,
    height: number
  ]
}

function Plane({
  position = [ 0, 0, 0 ],
  rotation = [0, 0, 0],
  size = [1, 1]
}: Props) {
  const sketch = useContext<Sketch>(CanvasContext);  
  const plane = new PlaneObject(...size);

  useEffect(() => {
    plane.setPosition(...position);
    plane.setRotation(...rotation);
    sketch.addObject(plane);
  }, []);

	return <></>;
}

export default Plane;
