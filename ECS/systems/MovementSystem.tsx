import { ECS } from "@/store/store";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const movingEntities = ECS.world.with("position", "velocity");

const MovementSystem = () => {
  useFrame((_, dt) => {
    for (const entity of movingEntities) {
      entity.position.x += entity.velocity.x * dt;
      entity.position.y += entity.velocity.y * dt;
      entity.position.z += entity.velocity.z * dt;

      entity.three?.translateX(entity.velocity.x * dt);
      entity.three?.translateY(entity.velocity.y * dt);
      entity.three?.translateZ(entity.velocity.z * dt);
    }
  });

  return null;
};

export default MovementSystem;
