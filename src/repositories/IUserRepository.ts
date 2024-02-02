import { IUser, IUserRequest, TCreateUser } from "../dtos";

export interface IUserRepository {
  create(data: TCreateUser): Promise<TCreateUser | Error>;
  update(id: string, data: IUserRequest): Promise<IUser | Error>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  delete(data: string): Promise<void>;
} 