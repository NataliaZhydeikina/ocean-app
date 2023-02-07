import { ShaderMaterial, DoubleSide, TextureLoader } from "three";
import vertexShader from "../../shaders/OceanShader/OceanShader.glsl";
import fragmentShader from "../../shaders/OceanShader/OceanShader.frag";
import ocean from "../../../../assets/imgs/ocean.jpg";

export default class Material extends ShaderMaterial {
  constructor() {
    super({
      wireframe: true,
      side: DoubleSide,
      fragmentShader,
      vertexShader,
      uniforms: {
        uTime: { value: 0 },
        oceanTexture: {value: new TextureLoader().load(ocean) }
      }
    });
  }
  update(value: number): void {
    this.uniforms.uTime.value = value;
  }
}