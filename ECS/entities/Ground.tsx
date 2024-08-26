import { ECS } from "@/store/store";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

const Ground = () => (
  <ECS.Entity>
    <ECS.Component name="three">
      <RigidBody>
        <mesh position={new Vector3(0, 0, 0)}>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>
    </ECS.Component>
  </ECS.Entity>
);

export default Ground;
