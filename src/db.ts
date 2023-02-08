import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "railway",
  "postgres",
  "N765EDrhKWUi6cGEZHpv",
  {
    dialect: "postgres",
    host: "containers-us-west-112.railway.app",
    port: 7566,
  }
);

export default sequelize;