import * as THREE from "three";

export default function CardTable({ position, rotation = [0, 0, 0] }) {
  const width = 20;
  const height = 10;

  const geometry = new THREE.PlaneGeometry(width, height);
  // const texture = new THREE.TextureLoader().load(
  //   "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMC1leWUtMDItYy13b29kXzEuanBn.jpg"
  // );
  // const material = new THREE.MeshBasicMaterial({ map: texture });  const material = new THREE.MeshBasicMaterial({ color: "blue" });  const material = new THREE.MeshBasicMaterial({ color: "blue" });
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: "black" });
  const material = new THREE.MeshBasicMaterial({
    color: "blue",
    depthTest: false,
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={geometry} material={material} />
      <lineSegments geometry={edges} material={lineMaterial} />
    </group>
  );
}
