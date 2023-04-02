/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { SparkStorm } from "./SparkStorm";

const ntColors = ["#0073FF", "#00DCF4", "#F7F3A4", "#FFA727", "#FF6900"];

export const Controls = (props) => {
  const { gl, camera } = useThree();
  return (
    <orbitControls
      args={[camera, gl.domElement]}
      {...props}
      enableZoom={false}
    />
  );
};

export default function SparkScene() {
  const [fov, setFov] = useState(60);

  useEffect(() => {
    setInterval(() => setFov(60), 2000);
  });

  return (
    <Canvas
      dpr={window.devicePixelRatio}
      camera={{ fov: fov, position: [0, 0, 100] }}
      onCreated={({ gl, size, camera }) => {
        if (size.width < 600) {
          camera.position.z = 45;
        }
        gl.setClearColor(new THREE.Color("#020207"));
      }}
    >
      <Controls />
      {/* <pointLight distance={100} intensity={5} color="white" /> */}
      <group>
        <SparkStorm count={500} colors={ntColors} />
      </group>
    </Canvas>
  );
}
