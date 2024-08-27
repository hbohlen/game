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

const Player = () => {
  const playerRef = useRef<RapierRigidBody>(null);

  return (
    <ECS.Entity>
      <ECS.Component name="player" data={{ player: true }} />
      <ECS.Component name="position" data={new Vector3(0, 0, 0)} />
      <ECS.Component name="velocity" data={new Vector3(2, 0, 0)} />
      <ECS.Component name="health" data={100} />
      <ECS.Component name="three">
        <RigidBody ref={playerRef} colliders={"cuboid"}>
          <Box args={[1, 1, 1]} />
        </RigidBody>
      </ECS.Component>
    </ECS.Entity>
  );
};
export default Player;
