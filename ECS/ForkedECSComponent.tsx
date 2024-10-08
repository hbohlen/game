import { ECS } from "@/store/store";
import React, { ReactNode, useEffect, useLayoutEffect, useRef } from "react";

const ForkedECSComponent = (props: {
  name: any;
  data?: any;
  children?: ReactNode;
}) => {
  const entity: any = ECS.useCurrentEntity();
  const ref = useRef<any>(null!);

  useLayoutEffect(() => {
    console.log("ref in useLayoutEffect", typeof ref.current, ref.current); // ❌ null
  });
  useEffect(() => {
    console.log("ref in useEffect", typeof ref.current, ref.current); // ✅ Rigidbody
  });

  if (!entity) {
    throw new Error("<Component> must be a child of <Entity>");
  }

  /* Handle creation and removal of component with a value prop */
  useEffect(() => {
    // changed from useLayoutEffect to useEffect
    ECS.world.addComponent(entity, props.name, props.data || ref.current);
    return () => ECS.world.removeComponent(entity, props.name);
  }, [entity, props.name]);

  /* Handle updates to existing component */
  useEffect(() => {
    // changed from useLayoutEffect to useEffect
    if (props.data === undefined) return;
    entity[props.name] = (props.data || ref.current) as any;
  }, [entity, props.name, props.data, ref.current]);

  /* Handle setting of child value */
  if (props.children) {
    const child = React.Children.only(props.children) as any;

    return React.cloneElement(child, {
      ref: mergeRefs([(child as any).ref, ref]),
    });
  }

  return null;
};

export const mergeRefs =
  (refs: Array<React.Ref<any>>): React.Ref<any> =>
  (v: any) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(v);
      else if (!!ref) (ref as any).current = v;
    });
  };
