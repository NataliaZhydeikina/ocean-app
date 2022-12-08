import { useContext, useEffect } from "react";
import BoxModel from "../../models/BoxModel";
import { default as SketchModel } from "../../models/SketchModel";
import { CanvasContext } from "../Canvas";

interface Props {
  position?: {
    x?: number,
    y?: number,
    z?: number
  }
}

function Box({position={ x:0, y:0, z:0 }}: Props) {
  const sketch = useContext<SketchModel>(CanvasContext);  
  const box = new BoxModel(0.2, 0.2, 0.2);

  useEffect(() => {
    const { x=0, y=0, z=0 } = position;
    box.setPosition(x, y, z);
    sketch.addObject(box.get());
  }, []);

	return <></>;
}

export default Box;
