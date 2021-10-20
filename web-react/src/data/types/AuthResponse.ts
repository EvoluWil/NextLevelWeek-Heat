import { UserTypes } from "./User";

export interface AuthResponseTypes {
  token: string;
  user: UserTypes;
}
