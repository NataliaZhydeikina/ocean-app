import { ShaderMaterial, DoubleSide, Vector2 } from "three";
import vertexShader from "../../shaders/ImageShader/ImageShader.glsl";
import fragmentShader from "../../shaders/ImageShader/ImageShader.frag";

export default class Material extends ShaderMaterial {
  constructor(img?: HTMLImageElement) {
    super({
      wireframe: false,
      side: DoubleSide,
      fragmentShader,
      vertexShader,
      uniforms: {
        uTime: { value: 0 },
        uImage: {value: null},
        hover: {value: new Vector2(0.5,0.5)},
        hoverState: {value: 0},
      }
    });
  }
  update(value: number): void {
    this.uniforms.uTime.value = value;
  }
}