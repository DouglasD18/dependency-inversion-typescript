import { InMemoryCreateUserRepository } from "../repositories/InMemoryCreateUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { CreateUserController } from "../controller/CreateUserController";

export class CreateUserControllerFactory {
  static make() {
    const repository = new InMemoryCreateUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}