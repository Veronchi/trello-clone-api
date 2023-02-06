import Jwt from "jsonwebtoken";

function generateJwt(id: number, email: string, role: string): string {
  return Jwt.sign({ id, email, role }, "11111111222", {
    expiresIn: "24h",
  });
}

export default generateJwt;
