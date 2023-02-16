import { JwtPayload } from "jsonwebtoken"
import { IBoardId } from "../interface";
import { Board, User } from "../resource/common/models"

declare global{
    namespace Express {
        interface Request {
            locals: {
                user: typeof User | JwtPayload;
                board: typeof Board | JwtPayload;
                decode: JwtPayload;
                boardID: IBoardId;
            }
        }
    }
}