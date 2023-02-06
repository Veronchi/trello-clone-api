import { Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  login: string;
  password: string;
  email: string;
  role: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }

export interface IUser {
  id: number
  login: string,
  email: string,
  password: string,
  role: string,
}

interface BoardAttributes {
  id: number;
  name: string;
  background: string;
}

type BoardCreationAttributes = Optional<UserAttributes, 'id'>

export interface BoardInstance
  extends Model<BoardAttributes, BoardCreationAttributes>,
  UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }