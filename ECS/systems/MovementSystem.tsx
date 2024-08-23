import { useFrame } from "@react-three/fiber";
import { ECS } from "@/store/store";

const movingEntities = ECS.world.with("position", "velocity");
console.log(movingEntities);

const MovementSystem = () => {
  useFrame((_, dt) => {
    for (const entity of movingEntities) {
      entity.entity.transform.position.y += entity.velocity.y * delta;
      entity.transform.position.z += entity.velocity.z * delta;
    }
  });

  return null;
};

export default MovementSystem;
