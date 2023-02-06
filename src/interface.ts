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
