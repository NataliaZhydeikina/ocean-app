uniform float uTime;
varying vec2 vUv;
varying float dist;
void main() {
  vec4 color = vec4(0.22, 0.23, 0.52, 1.);
  color = mix(color, vec4(vec3(1.), 1.), dist);
  gl_FragColor = color;
}