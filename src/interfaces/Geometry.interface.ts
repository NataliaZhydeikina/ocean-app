import { Material, Mesh } from "three";

export interface Geometry {
  material: Material;
  get(): Mesh;
  setPosition(x: number|undefined, y: number|undefined, z: number|undefined): void,
  update(value?: number): void;
  setRotation(x: number|undefined, y: number|undefined, z: number|undefined): void,
  resize(): void;
}