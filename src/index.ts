import express from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateUserService } from "./services/CreateUserService";

const app = express();

const service = new CreateUserService();
const controller = new CreateUserController(service);

app.post('/user', (req, res) => controller.handle(req, res));

app.listen(3000);
