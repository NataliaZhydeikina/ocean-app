import { Mesh } from "three";

export interface Geometry {
  get(): Mesh;
  setPosition(x: number, y: number, z: number): void,
  update(value: number): void;
}