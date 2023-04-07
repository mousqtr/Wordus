import * as THREE from "three";

export default function Table() {
  const radius = 50;
  const segments = 32;

  const geometry = new THREE.CircleGeometry(radius, segments);
  //   const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
  const texture = new THREE.TextureLoader().load(
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIyMy1uaW5nLTA2XzIuanBn.jpg"
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });

  return (
    <>
      <mesh geometry={geometry} material={material}>
        <meshBasicMaterial attach="material" />
      </mesh>
      <lineSegments geometry={edges} material={lineMaterial} />
    </>
  );
}
