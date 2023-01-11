import express from "express";
import { CreateUserControllerFactory } from './factories/CreateUserControllerFactory';

const app = express();

const createUserController = CreateUserControllerFactory.make();

app.post('/user', (req, res) => createUserController.handle(req, res));

app.listen(3000);
