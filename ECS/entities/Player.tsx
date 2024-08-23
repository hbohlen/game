"use client";
import { ECS } from "@/store/store";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Player = () => {
  const meshRef = useRef<Mesh>(null);
  const [player] = useState(() =>
    ECS.world.add({
      position: { x: 0, y: 0, z: 0 },
      velocity: { x: 1, y: 0, z: 0 },
      health: 100,
    })
  );

  return (
    <ECS.Entity entity={player}>
      <ECS.Component name="three">
        <mesh ref={meshRef}>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </ECS.Component>
    </ECS.Entity>
  );
};

export default Player;
