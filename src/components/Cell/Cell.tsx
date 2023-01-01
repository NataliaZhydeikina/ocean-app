import "./Cell.css";
import { ICell } from "../../interfaces/Cell.interface";

const Cell = ({ link, img, meta, title, text }: ICell) => {
  return <a href={link} className="item item_v">
    <div className="item__image">
      <img src={img} alt="" />
      <div className="item__meta">{meta}</div>
    </div>
    <h2 className="item__title">{title}</h2>
    <p>{text}</p>
  </a>
}

export default Cell;