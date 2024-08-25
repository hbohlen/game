"use client";
import { Canvas } from "@react-three/fiber";
import Player from "@/ECS/entities/Player";
import Systems from "@/ECS/systems/Systems";
import MovementSystem from "@/ECS/systems/MovementSystem";
import { useMemo } from "react";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Controls } from "@/types/types";

export default function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MovementSystem />
        <Player />
      </Canvas>
    </KeyboardControls>
  );
}
