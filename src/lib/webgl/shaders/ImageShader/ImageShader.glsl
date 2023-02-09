uniform float uTime;
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;

void main() {
  vec3 newposition = position;
  float dist = distance(uv,hover);
  //newposition.z += hoverState*10.*sin(dist*10. + uTime);
  newposition.z += hoverState*10.*sin(dist*10. + uTime);
  vNoise = hoverState*sin(dist*10. - uTime);
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0);
}