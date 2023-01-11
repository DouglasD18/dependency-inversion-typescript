import express from "express";
import { CreateUserControllerFactory } from './factories/CreateUserControllerFactory';

const app = express();
app.use(express.json());

const createUserController = CreateUserControllerFactory.make();

app.post('/user', (req, res) => createUserController.handle(req, res));

app.listen(3000, () => console.log("Is running!"));
