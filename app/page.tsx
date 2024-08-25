"use client";
import { Canvas } from "@react-three/fiber";
import Player from "@/ECS/entities/Player";
import Systems from "@/ECS/systems/Systems";
import MovementSystem from "@/ECS/systems/MovementSystem";

export default function Home() {
  return (
    <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MovementSystem />
      <Player />
    </Canvas>
  );
}
