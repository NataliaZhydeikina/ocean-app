import { Mesh } from "three";

export interface Geometry {
  get(): Mesh;
  setPosition(x: number|undefined, y: number|undefined, z: number|undefined): void,
  update(value: number): void;
  setRotation(x: number|undefined, y: number|undefined, z: number|undefined): void
}