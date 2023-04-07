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
          {/* CardTable right */}
          <CardTable position={[44, -12, 5]} />
          <CardTable position={[44, -4, 5]} />
          <CardTable position={[44, 4, 5]} />
          <CardTable position={[44, 12, 5]} />
          {/* CardTable left */}
          <CardTable position={[-44, -12, 5]} />
          <CardTable position={[-44, -4, 5]} />
          <CardTable position={[-44, 4, 5]} />
          <CardTable position={[-44, 12, 5]} />
          {/* CardTable front */}
          <CardTable position={[-12, 40, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[-4, 40, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[4, 40, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[12, 40, 5]} rotation={[0, 0, Math.PI / 2]} />
          {/* CardTable bottom */}
          <CardTable position={[-12, -35, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[-4, -35, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[4, -35, 5]} rotation={[0, 0, Math.PI / 2]} />
          <CardTable position={[12, -35, 5]} rotation={[0, 0, Math.PI / 2]} />
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
