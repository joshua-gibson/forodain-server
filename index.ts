import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { connectToDatabase } from "./src/services/services";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(require("body-parser").json());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  connectToDatabase();
  res.send('Express + TypeScript Server for forodain');

});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
