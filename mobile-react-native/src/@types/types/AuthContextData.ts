import { UserTypes } from "./User";

export interface AuthContextData {
  user: UserTypes | null;
  isSignIng: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}
