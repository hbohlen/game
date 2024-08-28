import { ECS } from "@/store/store";

import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "@/types/types";

const movingEntities = ECS.world.with("position", "velocity");

const MovementSystem = () => {
  const left = useKeyboardControls<Controls>((state) => state.left);
  const right = useKeyboardControls<Controls>((state) => state.right);

  useFrame((_, dt) => {
    for (const entity of movingEntities) {
      const rigidBodyRef = entity.three.rigidBody.current;

      if (left) {
        entity.position.x += entity.velocity.x * -dt;
        entity.three?.translateX(entity.velocity.x * -dt);
      }

      if (right) {
        entity.position.x += entity.velocity.x * dt;
        entity.three?.translateX(entity.velocity.x * dt);
      }
    }
  });

  return null;
};

export default MovementSystem;
