/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { SparkStorm } from "./SparkStorm";
import Typewriter from "typewriter-effect";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useSpring, animated } from "react-spring";


const colors = {
  ntColors: ["#0073FF", "#00DCF4", "#F7F3A4", "#FFA727", "#FF6900"],
};

export const Controls = (props) => {
  const { gl, camera } = useThree();
  return <orbitControls args={[camera, gl.domElement]} {...props} />;
};

export default function SparkScene() {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={({ gl, size, camera }) => {
        if (size.width < 600) {
          camera.position.z = 45;
        }
        gl.setClearColor(new THREE.Color("#020207"));
      }}
    >
      <Suspense fallback={null}>
        <>
          <Controls />
          <pointLight distance={100} intensity={4} color="white" />
          <group>
            <SparkStorm count={500} colors={colors.ntColors} />
          </group>
        </>
      </Suspense>
    </Canvas>
  );
}
