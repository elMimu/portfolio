import { Instruction } from "./Instruction";

export type Playable = {
  name: string;
  src: string;
  about: string;
  instructions?: Instruction[];
  copyright?:string;
};
