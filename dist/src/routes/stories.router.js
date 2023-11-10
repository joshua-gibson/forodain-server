"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const firebase_1 = __importDefault(require("../../firebase"));
exports.storiesRouter = express_1.default.Router();
exports.storiesRouter.use(express_1.default.json());
exports.storiesRouter.use((0, cors_1.default)());
exports.storiesRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const stories = (await collections.stories?.find({}).toArray()) as Story[];
        const storyRef = firebase_1.default.collection('stories').doc('EUHLV59L1Z88bkFyoMIO');
        const stories = yield storyRef.get();
        res.status(200).send(stories);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.storiesRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const story = (yield ((_b = database_service_1.collections.stories) === null || _b === void 0 ? void 0 : _b.findOne(query)));
        if (story) {
            res.status(200).send(story);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
