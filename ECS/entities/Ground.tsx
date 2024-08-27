import { ECS } from "@/store/store";
import { CuboidCollider } from "@react-three/rapier";

const Ground = () => {
  return (
    <ECS.Entity>
      <ECS.Component name="three">
        <CuboidCollider position={[0, -10, 0]} args={[100, 0.5, 30]} />
      </ECS.Component>
    </ECS.Entity>
  );
};

export default Ground;
