import { SequelizeUser } from "../database/models/UserModel";
import { User } from "../entities/User";
import { CreateUserRepository } from "../services/CreateUserService";

export class SequelizeCreateUserRepository implements CreateUserRepository {
  async create(user: User): Promise<{ id: number; }> {
    const { id } = await SequelizeUser.create({ ...user });

    return { id };
  }
}