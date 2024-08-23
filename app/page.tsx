"use client";
import { Canvas } from "@react-three/fiber";
import Player from "@/ECS/entities/Player";

export default function Home() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Player />
    </Canvas>
  );
}
