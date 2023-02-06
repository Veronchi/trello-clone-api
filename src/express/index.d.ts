import { JwtPayload } from "jsonwebtoken"
import { User } from "../resource/common/models"

declare global{
    namespace Express {
        interface Request {
            locals: {
                user: typeof User | JwtPayload
            }
        }
    }
}