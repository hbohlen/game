import { Entity } from "./entity";
import { IUpdate } from "../update.h";
import { IAwake } from "../awake.h";

export interface IComponent extends IAwake, IUpdate {
  Entity: Entity | null;
}
