import { useContext, useEffect } from "react";
import SphereObject from "../../lib/webgl/common/Sphere";
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

function Sphere({
  position = [ 0, 0, 0 ],
  rotation = [0, 0, 0],
  size = [1, 1]
}: Props) {
  const sketch = useContext<Sketch>(CanvasContext);  
  const sphere = new SphereObject(...size);

  useEffect(() => {
    sphere.setPosition(...position);
    sphere.setRotation(...rotation);
    sketch.addObject(sphere);
  }, []);

	return <></>;
}

export default Sphere;
