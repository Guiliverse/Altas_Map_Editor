import * as THREE from "three";

export const screenToPlane = (event, raycaster, camera) => {
  const pointer = new THREE.Vector2(0.0, 0.0);
  const pointerGround = new THREE.Vector3(0.0, 0.0, 0.0);
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const ground = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5000.0, 1.0, 5000),
    new THREE.MeshStandardMaterial({
      color: 0xffffcc,
      side: THREE.BackSide,
    })
  );

  const hits = raycaster.intersectObjects([ground], true);
  if (hits.length) {
    pointerGround.copy(hits[0].point);
    pointerGround.add(hits[0].face.normal.clone().negate().multiplyScalar(2.0));
  }

  return [pointerGround.x, 0, pointerGround.z];
};

// Function to convert radians to degrees
export const radians_to_degrees = (radians) => {
  return radians * (180 / Math.PI);
};

// Function to find the distance between 2 points in a 3D plane
export const dist = (p1, p2) => {
  return Math.sqrt(
    Math.pow(p1[0] - p2[0], 2) +
      Math.pow(p1[1] - p2[1], 2) +
      Math.pow(p1[2] - p2[2], 2)
  );
};

// Function to find the angle in 3D space
export const find_angle = (a, b, c) => {
  const ab = dist(a, b);
  const bc = dist(b, c);
  const ac = dist(a, c);

  const angle =
    (Math.pow(ab, 2) + Math.pow(bc, 2) - Math.pow(ac, 2)) / (2 * ab * bc);
  return radians_to_degrees(Math.acos(angle));
};
