import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "railway",
  "postgres",
  "lxCqo7rmXp1VvsYkSJbh",
  {
    dialect: "postgres",
    host: "containers-us-west-23.railway.app",
    port: 6053,
  }
);

export default sequelize;