import "./Cell.css";
import { ICell } from "../../interfaces/Cell.interface";
import { ForwardedRef, forwardRef } from "react";

const Cell = ({ link, img, meta, title, text, index, mouseenter, mouseout }: ICell, ref:ForwardedRef<HTMLImageElement>) => {
  return <a href={link} className={`item ${index % 2 ? "item_v" : "item_h"}`}>
    <div className="item__image">
      <img src={`/src/assets/imgs/${img}`} alt="" ref={ref} onMouseEnter={()=>mouseenter&&mouseenter()} onMouseOut={()=>mouseout&&mouseout()} />
      <div className="item__meta">{meta}</div>
    </div>
    <h2 className="item__title">{title}</h2>
    <p>{text}</p>
  </a>
}

export default forwardRef(Cell);