uniform float uTime;
varying vec2 vUv;
varying float dist;
void main() {
  vec3 newposition = position;
  dist = distance(uv, vec2(.5));
  newposition.z += 0.1*sin(dist*20.+uTime);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.);
  vUv = uv;
}