import { ObjectId } from "mongodb";

interface Section {
    paragraphs: string[];
    image?: string;

};

export default class Story {
    constructor(public _id: ObjectId, public title: string, public sections: Section[],

    ) { }
}