// src/types.ts
import * as THREE from "three";
import { Vector3 } from "three";

export type Position = Vector3;

export type Velocity = Vector3;

export type Health = number;

export type Three = THREE.Object3D; // Update the type to THREE.Mesh

export type Entity = {
  position?: Position;
  velocity?: Velocity;
  health?: number;
  three?: THREE.Object3D; // Update the type to THREE.Mesh
};

export enum Controls {
  left = "left",
  right = "right",
}
