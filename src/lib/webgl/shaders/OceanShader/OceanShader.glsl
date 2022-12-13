void main() {
  vec3 newposition = position;
  newposition.z += 0.025*sin(newposition.x*50.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.);
}