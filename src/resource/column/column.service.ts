import { Column } from "../common/models";
import { ColumnInstance, IColumn, IBoardId } from "../../interface";
import ApiError from "../../error/ApiError";

async function createColumn(columnData: IColumn): Promise<ColumnInstance> {
  const {title, BoardId} = columnData;

  if (!title || !BoardId) {
    throw ApiError.badRequest("title or board not entered");
  }
  
  const column = await Column.create({title, BoardId});

  return column;
}

async function getAllColumns(obj: IBoardId): Promise<Array<ColumnInstance>> {
  
  const columns = await Column.findAll({ 
    where: {
      BoardId: obj.boardID
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
