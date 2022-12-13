import {
	PlaneGeometry,
	Mesh
} from "three";
import Material from "../Material";

export default class Plane {
	private width: number;
  private height: number;
  private geometry!: PlaneGeometry;
  private material!: Material;
  private mesh!: Mesh;

  constructor(width: number, height: number) {
		this.width = width;
    this.height = height;
    
    this.geometry = new PlaneGeometry(this.width, this.height, this.width*64, this.height*64);
		this.material = new Material();
    this.mesh = new Mesh(this.geometry, this.material);
  }
  
  get() {
		return this.mesh;
  }

  setPosition(x: number, y: number, z: number) {
    this.mesh.position.set(x, y, z);
  }
}