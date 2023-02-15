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
  id: number;
  login: string;
  email: string;
  password: string;
  role: string;
}

export interface IUserId {
  userID: string
}

interface BoardAttributes {
  id: number;
  title: string;
  background: string;
  UserId?: string;
}

type BoardCreationAttributes = Optional<BoardAttributes, 'id'>

export interface BoardInstance 
  extends Model<BoardAttributes, BoardCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IBoard {
  id: number;
  title: string;
  background: string;
  UserId: string;
}

interface ColumnAttributes {
  id: number;
  title: string;
  BoardId?: string;
}

type ColumnCreationAttributes = Optional<ColumnAttributes, 'id'>

export interface ColumnInstance 
  extends Model<ColumnAttributes, ColumnCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IColumn {
  id: number;
  title: string;
  BoardId: string;
}

export interface IBoardId {
  data: {
   boardID: string 
  }
}

interface RowAttributes {
  id: number;
  text: string;
  cover?: string;
  ColumnId?: string;
}

type RowCreationAttributes = Optional<RowAttributes, 'id'>

export interface RowInstance 
  extends Model<RowAttributes, RowCreationAttributes>, 
  UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IRow {
  id: number;
  text: string;
  cover?: string;
  ColumnId: string;
}

export interface IColumnId {
  data: {
   columnID: string 
  }
}