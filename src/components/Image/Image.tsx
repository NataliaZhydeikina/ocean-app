import { useContext, useEffect } from "react";
import { MeshBasicMaterial, Texture } from "three";
import PlaneObject from "../../lib/webgl/common/Plane";
import Sketch from "../../lib/webgl/common/Sketch";
import { CanvasContext } from "../Canvas";

interface Props {
  img: HTMLImageElement
}

function Image({
  img
}: Props) {
  const sketch = useContext<Sketch>(CanvasContext);  
  const {width, height, top, left } = img.getBoundingClientRect();
  const [widthCanvas, heightCanvas] = sketch.getSize();
  const image = new PlaneObject(width, height);


  useEffect(() => {
    const x = left - widthCanvas/2 + width/2;
    const y = -top + heightCanvas/2 - height/2;
    image.setPosition(x, y, 0);
    const texture = new Texture(img);
    texture.needsUpdate = true;
    image.setMaterial(new MeshBasicMaterial({
      color: 0xff0000,
      map: texture
    }));
    sketch.addObject(image);
  }, [sketch]);

	return <></>;
}

export default Image;
