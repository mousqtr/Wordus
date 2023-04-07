import * as THREE from "three";

export default function Table() {
  const shape = new THREE.Shape();
  const radius = 70;
  const points = [];
  const sides = 5;
  for (let i = 0; i < sides; i++) {
    const angle = i * ((2 * Math.PI) / sides);
    points.push(
      new THREE.Vector2(radius * Math.cos(angle), radius * Math.sin(angle))
    );
  }

  shape.setFromPoints(points);

  const extrudeSettings = {
    steps: 1,
    depth: 0.1,
    bevelEnabled: false,
  };

  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
  const edges = new THREE.EdgesGeometry(geometry);

  return (
    <group rotation={[0, 0, Math.PI / sides - Math.PI / 2]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="lightgrey" />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="black" linewidth={2} />
      </lineSegments>
    </group>
  );
}
