// src/types.ts
export type Position = {
  x: number;
  y: number;
  z: number;
};

export type Health = number;

export type Three = React.ReactNode;

export type Entity = {
  position?: { x: number; y: number; z: number };
  health?: number;
  three?: React.ReactNode; // Define the three component as a React node
};
