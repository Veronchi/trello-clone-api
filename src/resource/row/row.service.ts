import { Row } from "../common/models";
import { RowInstance, IRow, IColumnId } from "../../interface";
import ApiError from "../../error/ApiError";

async function createRow(rowData: IRow): Promise<RowInstance> {
  const {text, ColumnId} = rowData;

  if (!text || !ColumnId) {
    throw ApiError.badRequest("title or column not entered");
  }
  
  const row = await Row.create({text, ColumnId});

  return row;
}

async function getAllRows(obj: IColumnId): Promise<Array<RowInstance>> {
  
  const rows = await Row.findAll({ 
    where: {
      ColumnId: obj.columnID
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

async function remove(rowData: IRow): Promise<number> {
  return await Row.destroy({
    where: {
      id: rowData.id,
    },
  });
}

export { createRow, getAllRows, update, remove };
