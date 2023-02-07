import "./Cell.css";
import { ICell } from "../../interfaces/Cell.interface";
import { ForwardedRef, forwardRef } from "react";

const Cell = ({ link, img, meta, title, text, index }: ICell, ref:ForwardedRef<HTMLImageElement>) => {
  return <a href={link} className={`item ${index % 2 ? "item_v" : "item_h"}`}>
    <div className="item__image">
      <img src={`/src/assets/imgs/${img}`} alt="" ref={ref} />
      <div className="item__meta">{meta}</div>
    </div>
    <h2 className="item__title">{title}</h2>
    <p>{text}</p>
  </a>
}

export default forwardRef(Cell);