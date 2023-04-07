// Import modules
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Import components
import Table from "./Table";
import CardTable from "./CardTable";

// Import style
import "./Game.scss";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function Card({ position }) {
  const width = 0.5;
  const height = 0.7;

  const geometry = new THREE.PlaneGeometry(width, height);

  const texture = new THREE.TextureLoader().load(
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMC1leWUtMDItYy13b29kXzEuanBn.jpg"
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });

  return <mesh position={position} geometry={geometry} material={material} />;
}

export default function Game() {
  /**
   * Rendering function
   */
  return (
    <div className="game">
      <Canvas
        camera={{ position: [0, -120, 100], fov: 40 }}
        gl={{ antialias: true }}
        onCreated={({ gl, scene }) => {
          // scene.add(new THREE.AxesHelper(20));
          gl.setPixelRatio(window.devicePixelRatio);
        }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[100, 100, 100]} />
        <CameraControls />
        <Suspense fallback={<></>}>
          <Table />
          <CardTable position={[0, 0, 5]} />
          <Card position={[0, -50, 100]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
