'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import NeuralNetwork from './NeuralNetwork';


interface SceneContentProps {
  scrollY: number;
}

const SceneContent: React.FC<SceneContentProps> = ({ scrollY }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.y = -scrollY * 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 5]} />
            <NeuralNetwork />
    </>
  );
};

interface SceneProps {
  scrollY: number;
}

const Scene: React.FC<SceneProps> = ({ scrollY }) => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <color attach="background" args={['#000000']} />
      <SceneContent scrollY={scrollY} />
    </Canvas>
  );
};

export default Scene;
