import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial
} from "three";
import { Geometry } from "../../../../interfaces/Geometry.interface";

export default class Box implements Geometry {
	private width: number;
  private height: number;
  private depth: number;
  private geometry!: BoxGeometry;
  private material!: MeshNormalMaterial;
  private mesh!: Mesh;

  constructor(width: number, height: number, depth: number) {
		this.width = width;
    this.height = height;
    this.depth = depth;
    
    this.geometry = new BoxGeometry(this.width, this.height, this.depth);
		this.material = new MeshNormalMaterial();
    this.mesh = new Mesh(this.geometry, this.material);
  }
  
  get(): Mesh {
		return this.mesh;
  }

  update(value: number): void {
    
  }

  setPosition(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this.mesh.position.set(x, y, z);
  }

  setRotation(x: number|undefined = 0, y: number|undefined=0, z: number|undefined=0): void {
    this?.mesh?.rotation?.set(x, y, z);
  }
}