uniform float uTime;
uniform sampler2D uImage;
varying vec2 vUv;
varying float dist;
varying float vNoise;

void main() {
  vec4 imageView = texture2D(uImage, vUv);
  gl_FragColor = vec4(vNoise, 0.,0.,1.);
  gl_FragColor = imageView;
  gl_FragColor.rgb += 0.1*vec3(vNoise);
}