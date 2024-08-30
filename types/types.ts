// src/types.ts
import * as THREE from "three";
import { Vector3 } from "three";

export type Position = Vector3;

export type Velocity = Vector3;

export type Health = number;

export type Three = THREE.Object3D; // Update the type to THREE.Mesh

export type Player = {
  player: boolean;
};

export type Entity = {
  player?: boolean;
  name?: string;
  rigidBody?: any;
  collider?: any;
  jsx?: any;
  three?: any;
  velocity: Vector3;
};

export enum Controls {
  left = "left",
  right = "right",
}
