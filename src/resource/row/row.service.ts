import { Row } from "../common/models";
import { RowInstance, IRow } from "../../interface";
import ApiError from "../../error/ApiError";
import { Request } from "express";

async function createRow(rowData: IRow): Promise<RowInstance> {
  const {text, ColumnId} = rowData;

  if (!text || !ColumnId) {
    throw ApiError.badRequest("text or columnId not entered");
  }
  
  const row = await Row.create({text, ColumnId});

  return row;
}

async function getAllRows(req: Request): Promise<Array<RowInstance>> {
  const { query } = req;
  const rows = await Row.findAll({ 
    where: {
      ColumnId: query.columnID as string
    } 
  })

  return rows;
}

async function update(rowData: IRow): Promise<[affectedCount: number]> {
  return await Row.update(rowData, {
    where: {
      id: rowData.id,
    },
  });
}

async function remove(req: Request): Promise<number> {
  const {query} = req;

  return await Row.destroy({
    where: {
      id: query.id as string,
    },
  });
}

export { createRow, getAllRows, update, remove };
