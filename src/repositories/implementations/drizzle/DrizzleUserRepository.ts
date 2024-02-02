import { db } from "../../../db/drizzle";
import { IUserRequest, IUser, TCreateUser } from "../../../dtos";
import { IUserRepository } from "../../IUserRepository";
import * as schema from "../../../db/schemas";


export class DrizzleUserRepository implements IUserRepository {

  private _repository = db;

  async create(data: TCreateUser): Promise<TCreateUser | Error> {
    return await this._repository.insert(schema.users).values(data).returning();;
  }
  update(id: string, data: IUserRequest): Promise<IUser | Error> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IUser | null> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<IUser | null> {
    throw new Error("Method not implemented.");
  }
  delete(data: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

 

  
}