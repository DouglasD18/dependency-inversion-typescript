import express from "express";
import { CreateUserControllerFactory } from './factories/CreateUserControllerFactory';
import { SequelizeCreateUserFactory } from "./factories/SequelizeCreateUserControllerFactory";

const app = express();
app.use(express.json());

const createUserController = CreateUserControllerFactory.make();
const sequelizeCreateUserController = SequelizeCreateUserFactory.make();

app.post('/user', (req, res) => createUserController.handle(req, res));
app.post('/user/sequelize', (req, res) => sequelizeCreateUserController.handle(req, res));

app.listen(3000, () => console.log("Is running!"));
