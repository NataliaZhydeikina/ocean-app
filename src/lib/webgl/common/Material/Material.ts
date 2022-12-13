import { ShaderMaterial, DoubleSide } from "three";
import vertexShader from "../../shaders/OceanShader/OceanShader.glsl";
import fragmentShader from "../../shaders/OceanShader/OceanShader.frag";

export default class Material extends ShaderMaterial {
  constructor() {
    super({
      side: DoubleSide,
      fragmentShader,
      vertexShader,
      wireframe: true
    });
  }

}