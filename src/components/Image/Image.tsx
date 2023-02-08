import gsap from "gsap";
import { useContext, useEffect } from "react";
import { Mesh, Texture } from "three";
import { ICell } from "../../interfaces/Cell.interface";
import Material from "../../lib/webgl/common/Material";
import PlaneObject from "../../lib/webgl/common/Plane";
import Sketch from "../../lib/webgl/common/Sketch";
import { CanvasContext } from "../Canvas";

interface Props {
  img: HTMLImageElement,
  cell: ICell,
  index: number,
  updateCell: {(i:number, val:ICell):void};
}

function Image({img, cell, index, updateCell}: Props) {
  const sketch = useContext<Sketch>(CanvasContext);  
  const {width, height, top, left } = img.getBoundingClientRect();
  const [widthCanvas, heightCanvas] = sketch.getSize();
  const image = new PlaneObject(width, height, img);


  useEffect(() => {
    const mouseenter = ()=>{
      image.material.uniforms.hoverState.value = 1;
    }
    const mouseout = ()=>{
      image.material.uniforms.hoverState.value = 0;
    }
    
    const x = left - widthCanvas/2 + width/2;
    const y = -top + heightCanvas/2 - height/2;
    image.setPosition(x, y, 0);
    image.setUpdate(() => image.setPosition(x, sketch.getScroll()+y, 0));
    const texture = new Texture(img);
    texture.needsUpdate = true;
    image.material.uniforms.uImage.value = texture;
    sketch.addObject(image);
    let newCell = Object.assign({}, cell, {mouseenter, mouseout});
    updateCell(index, newCell);

    return ()=>{
      sketch.removeObject(image);
    }
  }, [sketch]);

	return <></>;
}

export default Image;
