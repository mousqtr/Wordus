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
// import Box from "./Box";

// Import style
import "./Game.scss";

function Plane({ color, ...props }) {
  // const texture = useLoader(
  //   THREE.TextureLoader,
  //   "./img/activities/demo/stone.png"
  // );
  return (
    <mesh receiveShadow castShadow {...props}>
      <boxBufferGeometry />
      {/* <meshBasicMaterial attach="material" map={texture} toneMapped={false} /> */}
    </mesh>
  );
}

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

export default function Game () {

  /**
   * Rendering function
   */
    return (
      <div className="game">
        <Canvas
          camera={{ position: [0, -100, 100], fov: 55 }}
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
            <Plane position-z={0} scale={[100, 100, 1]} />
          </Suspense>
        </Canvas>
      </div>
    );
}
