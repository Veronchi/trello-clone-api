import { DataTypes } from 'sequelize';
import { BoardInstance, ColumnInstance, RowInstance, UserInstance } from '../../interface';
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

User.prototype.toJSON =  function (): UserInstance {
  const values = Object.assign({}, this.get());

  delete values.password;
  return values;
}

const Board = sequelize.define<BoardInstance>("Board", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  background: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

const Column = sequelize.define<ColumnInstance>("Column", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

const Row = sequelize.define<RowInstance>("Row", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  }
});

User.hasMany(Board);
Board.belongsTo(User);

Board.hasMany(Column);
Column.belongsTo(Board);

Column.hasMany(Row);
Row.belongsTo(Column);

export { User, Board, Column, Row };
