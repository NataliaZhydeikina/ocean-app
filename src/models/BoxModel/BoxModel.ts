import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial
} from "three";

export default class BoxModel {
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
  
  get() {
		return this.mesh;
  }

  setPosition(x: number, y: number, z: number) {
    this.mesh.position.set(x, y, z);
  }
}