"use client";
import { ECS } from "@/store/store";
import { RigidBody } from "@react-three/rapier";

import { Vector3 } from "three";

const Player = () => (
  <ECS.Entity>
    <ECS.Component name="position" data={new Vector3(0, 0, 0)} />
    <ECS.Component name="velocity" data={new Vector3(2, 0, 0)} />
    <ECS.Component name="health" data={100} />
    <ECS.Component name="three">
      <RigidBody>
        <mesh position={new Vector3(0, 0, 0)}>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </RigidBody>
    </ECS.Component>
  </ECS.Entity>
);

export default Player;
