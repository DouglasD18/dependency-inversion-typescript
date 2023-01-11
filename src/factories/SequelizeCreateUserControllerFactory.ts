import { CreateUserController } from "../controller/CreateUserController";
import { SequelizeCreateUserRepository } from "../repositories/SequelizeCreateUserRepository";
import { CreateUserService } from "../services/CreateUserService";

export class SequelizeCreateUserFactory {
  static make() {
    const repository = new SequelizeCreateUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}