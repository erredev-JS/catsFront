import { IBreed } from "./IBreed";

export interface ICat {
  id: number;
  name: string;
  breed: IBreed;
  age: number;
  userEmail: string;
}
