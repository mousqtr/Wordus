import * as THREE from "three";

export default function CardTable({ position }) {
  const width = 20;
  const height = 10;

  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  return (
    <mesh geometry={geometry} material={material} position={position}>
      <meshBasicMaterial attach="material" color="yellow" />
    </mesh>
  );
}
