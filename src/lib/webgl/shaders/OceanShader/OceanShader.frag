uniform float uTime;
varying float vNoise;
void main() {
  vec4 color = vec4(0.13, 0.14, 0.61, 1.);
  color = mix(color, vec4(0.,0.,0.,1.), 0.5);
  vec4 color2 = vec4(0.1, 0.89,0.91, 1.);
  color = mix(color, color2, clamp(0.5*(vNoise+0.5), 0., 1.));
  gl_FragColor = color;
}