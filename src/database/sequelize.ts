import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'password',
});
