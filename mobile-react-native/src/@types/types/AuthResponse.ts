import { UserTypes } from "./User";

export interface AuthResponseTypes {
  token: string;
  user: UserTypes;
}

export interface AuthorizationResponseTypes {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
}
