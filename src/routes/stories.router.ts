import express, { Request, Response } from "express";
import cors from 'cors';
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Story from "../models/story";
import db from '../../firebase';

export const storiesRouter = express.Router();

storiesRouter.use(express.json());
storiesRouter.use(cors());

storiesRouter.get("/", async (_req: Request, res: Response) => {
    try {
        // const stories = (await collections.stories?.find({}).toArray()) as Story[];
        const storyRef = db.collection('stories').doc('EUHLV59L1Z88bkFyoMIO');
        const stories = await storyRef.get();
        res.status(200).send(stories);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

storiesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {

        const query = { _id: new ObjectId(id) };
        const story = (await collections.stories?.findOne(query)) as Story;

        if (story) {
            res.status(200).send(story);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});