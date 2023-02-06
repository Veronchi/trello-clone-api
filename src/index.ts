import express from "express";
import cors from "cors";
import sequelize from "./db";
import path from "node:path";
import errorHadler from './middleware/ErrorHandlingMiddleware';
import userRoute from "./resource/user/user.routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use('/api/user', userRoute);

app.use(errorHadler);

sequelize
  .sync()
  .then((data) => {
    // sequelize.drop().then((data) => {
    //     console.log("Done");
    // })
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
