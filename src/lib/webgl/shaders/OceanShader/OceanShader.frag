uniform float uTime;
uniform sampler2D oceanTexture;
varying float vNoise;
varying vec2 vUv;
void main() {
  vec4 color = vec4(0.13, 0.14, 0.61, 1.);
  color = mix(color, vec4(0.,0.,0.,1.), 0.5);
  vec4 color2 = vec4(0.1, 0.89,0.91, 1.);
  color = mix(color, color2, clamp(0.5*(vNoise+0.5), 0., 1.));
  
  vec2 newUv = vec2(vUv.x, vUv.y*2.-0.5+0.25*sin(vUv.x*10.+uTime));
  vec4 oceanView = texture2D(oceanTexture, newUv);
  gl_FragColor = oceanView;

}