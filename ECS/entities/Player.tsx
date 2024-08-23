"use client";
import { ECS } from "@/store/store";
import { useEntities } from "miniplex-react";
import { useMemo } from "react";

const Player = () => {
  const entities = useEntities(ECS.world.with("position"));

  const position = useMemo(() => {
    if (entities.length > 0) {
      const entity = entities[0];
      return [entity.position.x, entity.position.y, entity.position.z];
    }
    return [0, 0, 0];
  }, [entities]);

  return (
    entities.length > 0 && (
      <ECS.Entity entity={entities[0]}>
        <mesh position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </ECS.Entity>
    )
  );
};

export default Player;
