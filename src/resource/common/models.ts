import { DataTypes } from 'sequelize';
import { BoardInstance, UserInstance } from '../../interface';
import sequelize from "../../db";

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false,
  },
});

const Board = sequelize.define<BoardInstance>("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  background: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

User.hasMany(Board);
Board.belongsTo(User);

export { User, Board };
