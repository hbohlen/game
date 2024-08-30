"use client";
import { ECS } from "@/store/store";
import { Box } from "@react-three/drei";
import {
  CuboidCollider,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import { useRef } from "react";

import { Vector3 } from "three";

const player = ECS.world.with("player");

const Player = () => {
  const playerRef = useRef(null);
  const componentRef = useRef(null);

  return (
    <ECS.Entity>
      <ECS.Component name="player" data={true} />
      <ECS.Component name="velocity" data={new Vector3()} />
      <ECS.Component name="three">
        <RigidBody ref={playerRef} position={new Vector3(0, 0, 0)}>
          <Box args={[1, 1, 1]} ref={componentRef} />
        </RigidBody>
      </ECS.Component>
    </ECS.Entity>
  );
};

export const spawnPlayer = ({ position }: { position: Vector3 }) => {
  ECS.world.add({
    player: true,
    velocity: new Vector3(),
    jsx: (
      <ECS.Component name="three">
        <RigidBody position={position}>
          <Box args={[1, 1, 1]} />
        </RigidBody>
      </ECS.Component>
    ),
  });
};
export default Player;
