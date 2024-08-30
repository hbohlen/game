import { ECS } from "@/store/store";

import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "@/types/types";

const movingEntities = ECS.world.with("player");
console.log(movingEntities);

const MovementSystem = () => {
  const left = useKeyboardControls<Controls>((state) => state.left);
  const right = useKeyboardControls<Controls>((state) => state.right);

  useFrame((_, dt) => {
    for (const entity of movingEntities) {
      const rigidBodyRef = entity.three?.ref.current;
      console.log("Rigid Body ref: " + rigidBodyRef);

      if (left) {
        //rigidBodyRef?.applyImpulse(new Vector3(-10, 0, 0));
      }

      if (right) {
      }
    }
  });

  return null;
};

export default MovementSystem;
