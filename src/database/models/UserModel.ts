import { DataTypes, Model } from "sequelize";
import { Role } from "../../entities/User";
import { sequelize } from "../sequelize";

export class SequelizeUser extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: Role;
}

SequelizeUser.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize
});