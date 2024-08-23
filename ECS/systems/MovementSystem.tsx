import { useEntities } from "miniplex-react";
import { useFrame } from "@react-three/fiber";
import { ECS } from "@/store/store";

const movingEntities = ECS.world.with("position");

const MovementSystem = () => {
  useFrame((_, dt) => {
    for (const entity of movingEntities.entities) {
      entity.position.x -= 0.05;
      console.log(entity.position.x);
    }
  });

  return null;
};

export default MovementSystem;
