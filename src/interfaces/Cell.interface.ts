import { RefObject } from "react";

export interface ICell {
  index: number,
  link: string,
  img: string,
  meta: string,
  title: string,
  text: string,
  mouseenter: {():void}|null,
  mouseout: {():void}|null,
}