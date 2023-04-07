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
import CardHand from "./CardHand";
import CardsTable from "./CardsTable";

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

export default function Game() {
  /**
   * Rendering function
   */
  return (
    <div className="game">
      <Canvas
        camera={{ position: [0, -130, 100], fov: 40 }}
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
          {/* Table */}
          <Table />
          {/* CardTable center */}
          <CardTable position={[0, 0, 5]} />

          {/* CardsTable */}
          <CardsTable position={[0, -44, 5]} />
          <CardsTable
            position={[-35, -35, 5]}
            rotation={[0, 0, -Math.PI / 3.5]}
          />
          <CardsTable position={[-49, 0, 5]} rotation={[0, 0, Math.PI / 2.4]} />
          <CardsTable position={[-35, 35, 5]} rotation={[0, 0, Math.PI / 7]} />
          <CardsTable position={[35, 35, 5]} rotation={[0, 0, -Math.PI / 7]} />
          <CardsTable position={[49, 0, 5]} rotation={[0, 0, -Math.PI / 2.4]} />
          <CardsTable
            position={[35, -35, 5]}
            rotation={[0, 0, Math.PI / 3.5]}
          />

          {/* CardHand */}
          <CardHand position={[-6, -93, 50]} />
          <CardHand position={[-2, -93, 50]} />
          <CardHand position={[2, -93, 50]} />
          <CardHand position={[6, -93, 50]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
