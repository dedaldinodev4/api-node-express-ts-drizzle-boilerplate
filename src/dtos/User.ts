import { IBase } from "./Base";
import { users } from "../db/schemas";

export interface IUser extends IBase, IUserRequest {}
export interface IUserRequest {
  name: string;
  email: string;
}
export type TCreateUser = typeof users.$inferInsert;