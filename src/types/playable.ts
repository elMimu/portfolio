import { Instruction } from "./Instruction";

export type Playable = {
  name: string;
  src: string;
  instructions?: Instruction[];
  copyright?:string;
};
