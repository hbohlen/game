"use client";
import { Canvas } from "@react-three/fiber";
import Player from "@/ECS/entities/Player";
import Systems from "@/ECS/systems/Systems";

export default function Home() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Systems />
      <Player />
    </Canvas>
  );
}
