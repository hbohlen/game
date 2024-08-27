"use client";
import "../index.css";
import { Canvas } from "@react-three/fiber";
import Player from "@/ECS/entities/Player";
import Ground from "@/ECS/entities/Ground";
import Systems from "@/ECS/systems/Systems";
import MovementSystem from "@/ECS/systems/MovementSystem";
import { Suspense, useMemo } from "react";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Controls } from "@/types/types";
import { Physics } from "@react-three/rapier";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Torus, Box } from "@react-three/drei";

export default function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <KeyboardControls map={map}>
        <Canvas
          frameloop="demand"
          orthographic
          camera={{ zoom: 50, position: [0, 0, 100] }}
        >
          <Suspense>
            <Physics updateLoop="independent" debug gravity={[0, -1, 0]}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Player />

              <Ground />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}
