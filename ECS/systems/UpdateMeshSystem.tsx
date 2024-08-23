import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { ECS } from "@/store/store";
import { Entity } from "@/types/types";

const entitiesWithMesh = ECS.world.with("position", "three");

const UpdateMeshSystem = () => {
  const entities = ECS.useEntities(entitiesWithMesh);

  useEffect(() => {
    entities.forEach((entity) => {
      const e = entity as Entity;
      if (e.position && e.three?.current) {
        e.three.current.position.set(e.position.x, e.position.y, e.position.z);
      }
    });
  }, [entities]);

  useFrame(() => {
    entities.forEach((entity) => {
      const e = entity as Entity;
      if (e.position && e.three?.current) {
        e.three.current.position.set(e.position.x, e.position.y, e.position.z);
      }
    });
  });

  return null;
};

export default UpdateMeshSystem;
