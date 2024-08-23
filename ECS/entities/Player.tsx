"use client";
import { ECS } from "@/store/store";
import { Canvas } from "@react-three/fiber";

const Player = () => (
  <ECS.Entity>
    <ECS.Component name="position" data={{ x: 0, y: 0, z: 0 }} />
    <ECS.Component name="health" data={100} />
    <ECS.Component name="three">
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </ECS.Component>
  </ECS.Entity>
);

export default Player;
