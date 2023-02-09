import {
	SphereGeometry,
	Mesh
} from "three";
import Material from "../Material";
import { Geometry } from "../../../../interfaces/Geometry.interface";

export default class Sphere implements Geometry {
	private width: number;
  private height: number;
  private geometry!: SphereGeometry;
  public material!: Material;
  private mesh!: Mesh;

  constructor(width: number, height: number) {
		this.width = width;
    this.height = height;
    
    this.geometry = new SphereGeometry(this.width, this.width*128, this.height*128);
		this.material = new Material();
    this.mesh = new Mesh(this.geometry, this.material);
  }
  resize(): void {
    throw new Error("Method not implemented.");
  }
  
  get(): Mesh {
		return this.mesh;
  }

  setPosition(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this.mesh.position.set(x, y, z);
  }

  setRotation(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this?.mesh?.rotation?.set(x, y, z);
  }

  update(value: number): void {
    this.material.uniforms.uTime.value = value;
  }
}