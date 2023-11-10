import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { connectToDatabase } from "./src/services/database.service";
import { storiesRouter } from "./src/routes/stories.router";

const serviceAccount = JSON.parse(process.env.CREDS as string);

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(helmet());
app.use(require("body-parser").json());

const port = process.env.PORT;

connectToDatabase()
  .then(() => {
    app.use("/stories", storiesRouter);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
