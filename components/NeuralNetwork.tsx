'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);
  const nodesRef = useRef<(THREE.Mesh | null)[]>([]);

  const { nodes, lines } = useMemo(() => {
    const numNodes = 300; // More nodes for a denser network
    const ySpread = 120; // Increased vertical spread to cover the whole page
    const nodePositions = new Array(numNodes).fill(0).map(() => {
      const x = (Math.random() - 0.5) * 20; // Widen the network
      const y = (Math.random() * ySpread) - (ySpread / 2); // Center the cloud vertically
      const z = (Math.random() - 0.5) * 15; // Add more depth
      return new THREE.Vector3(x, y, z);
    });

    const lineSegments: THREE.Vector3[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 3.5) { // Increased connection distance
          lineSegments.push(nodePositions[i], nodePositions[j]);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(lineSegments);
    return { nodes: nodePositions, lines: lineGeometry };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002; // Slow rotation
    }

    const ySpread = 120;
    const topBoundary = ySpread / 2;
    const bottomBoundary = -ySpread / 2;

    // Move the light with the mouse
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 10;
      lightRef.current.position.y = mouse.y * 10;
    }

    const newPositions: THREE.Vector3[] = [];
    // Animate individual nodes
    nodesRef.current.forEach((node, i) => {
      if (!node) return;

      // Move node up
      node.position.y += 0.005; // Slower scroll speed

      // Reset node to bottom if it goes off-screen
      if (node.position.y > topBoundary) {
        node.position.y = bottomBoundary;
        node.position.x = (Math.random() - 0.5) * 15;
        node.position.z = (Math.random() - 0.5) * 10;
      }

      newPositions.push(node.position);

      // Base pulse animation
      const t = clock.getElapsedTime() + i * 0.1;
      let scale = 0.5 + 0.5 * Math.sin(t * 2);
      let intensity = 1;

      // Interaction with mouse light
      if (lightRef.current) {
        const distance = node.position.distanceTo(lightRef.current.position);
        const interactionScale = Math.max(0, 1 - distance * 0.5);
        scale += interactionScale * 2;
        intensity += interactionScale * 5;
      }

      node.scale.set(scale, scale, scale);
      (node.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    });

    // Update lines
    if (lineRef.current) {
      const lineSegments: THREE.Vector3[] = [];
      for (let i = 0; i < newPositions.length; i++) {
        for (let j = i + 1; j < newPositions.length; j++) {
          const dist = newPositions[i].distanceTo(newPositions[j]);
          if (dist < 3.5) { // Increased connection distance
            lineSegments.push(newPositions[i], newPositions[j]);
          }
        }
      }
      const newLineGeometry = new THREE.BufferGeometry().setFromPoints(lineSegments);
      lineRef.current.geometry.dispose();
      lineRef.current.geometry = newLineGeometry;
    }
  });

  return (
    <group ref={groupRef}>
      <pointLight ref={lightRef} color="#ffffff" intensity={0.1} distance={10} />
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos} ref={(el) => (nodesRef.current[i] = el)}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
        </mesh>
      ))}
      <lineSegments ref={lineRef} geometry={lines}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
};

export default NeuralNetwork;
