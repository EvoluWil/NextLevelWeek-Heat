import { UserTypes } from "./User";

export interface AuthContextDataTypes {
  user: UserTypes | null;
  signOut: () => void;
}
