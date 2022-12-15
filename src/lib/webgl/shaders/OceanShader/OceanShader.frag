uniform float uTime;
varying vec2 vUv;
varying float dist;
varying float vNoise;
void main() {
  vec4 color = vec4(0.22, 0.23, 0.52, 1.);
  color = mix(color, vec4(vec3(1.), 1.), vNoise-0.5);
  gl_FragColor = color;
}