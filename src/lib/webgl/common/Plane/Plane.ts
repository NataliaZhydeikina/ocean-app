import {
	PlaneGeometry,
	Mesh,
  Material
} from "three";
import CustomMaterial from "../Material";
import { Geometry } from "../../../../interfaces/Geometry.interface";

export default class Plane implements Geometry {
	private width: number;
  private height: number;
  private geometry!: PlaneGeometry;
  private material!: Material;
  private mesh!: Mesh;
  private updateFunc: (params?: number) => void;

  constructor(width: number, height: number) {
		this.width = width;
    this.height = height;
    
    this.geometry = new PlaneGeometry(this.width, this.height, Math.max(1,this.width/25), Math.max(1, this.height/25));
		this.material = new CustomMaterial();
    this.mesh = new Mesh(this.geometry, this.material);
    this.updateFunc = this.updateMaterial;
  }
  get(): Mesh {
		return this.mesh;
  }
  setMaterial(material: Material){
    this.material = material;
    this.material.needsUpdate = true;
    this.mesh.material = this.material;
  }
  setPosition(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this.mesh.position.set(x, y, z);
  }
  setRotation(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this?.mesh?.rotation?.set(x, y, z);
  }
  update(param: number) {
    this.updateFunc(param);
  }
  setUpdate(callback:()=>void) {
    this.updateFunc = callback;
  }
  private updateMaterial(value?: number): void {
    if(this.material instanceof CustomMaterial) {
      this.material?.update(value || 0);
    }
  }

}