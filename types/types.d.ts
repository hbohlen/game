// src/types.ts
import * as THREE from "three";

export type Position = THREE.Vector3;

export type Velocity = THREE.Vector3;

export type Health = number;

export type Three = THREE.Object3D; // Update the type to THREE.Mesh

export type Entity = {
  position?: Position;
  velocity?: Velocity;
  health?: number;
  three?: THREE.Object3D; // Update the type to THREE.Mesh
};
