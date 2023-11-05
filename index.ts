import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import * as mongoDB from "mongodb";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(require("body-parser").json());

export const collections: { stories?: mongoDB.Collection } = {}

const port = process.env.PORT;

const uri = "mongodb://192.168.5.58:27017/forodainDB";

export async function connectToDatabase () {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);
          
  await client.connect();
      
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
 
  const storiesCollection: mongoDB.Collection = db.collection(process.env.STORIES_COLLECTION_NAME as string);

collections.stories = storiesCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${storiesCollection.collectionName}`);
};





  app.get('/', (req: Request, res: Response) => {
    connectToDatabase();
    res.send('Express + TypeScript Server for forodain');
    
  });


  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
