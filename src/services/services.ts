import * as dotenv from 'dotenv';
import * as mongoDB from "mongodb";

export const collections: { stories?: mongoDB.Collection } = {}
export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const storiesCollection: mongoDB.Collection = db.collection(process.env.STORIES_COLLECTION_NAME as string);

    collections.stories = storiesCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${storiesCollection.collectionName}`);
};

