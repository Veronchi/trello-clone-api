import { Column } from "../common/models";
import { ColumnInstance, IColumn, IBoardId } from "../../interface";
import ApiError from "../../error/ApiError";
import { Request } from "express";

async function createColumn(columnData: IColumn): Promise<ColumnInstance> {
  const {title, BoardId} = columnData;

  if (!title || !BoardId) {
    throw ApiError.badRequest("title or board not entered");
  }

  const column = await Column.create({title, BoardId});

  return column;
}

async function getAllColumns(req: Request): Promise<Array<ColumnInstance>> {
  const { query } = req;
  const columns = await Column.findAll({ 
    where: {
      BoardId: query.boardID as string
    } 
  })

  return columns;
}

async function update(columnData: IColumn): Promise<[affectedCount: number]> {
  return await Column.update(columnData, {
    where: {
      id: columnData.id,
    },
  });
}

async function remove(columnData: IColumn): Promise<number> {
  return await Column.destroy({
    where: {
      id: columnData.id,
    },
  });
}

export { createColumn, getAllColumns, update, remove };
