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
exports.createPost = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const azureBlobService_1 = require("../services/azureBlobService"); // Azure service
// Controller for creating a new post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    try {
        let imageUrl = '';
        if (req.file) {
            // Upload image to Azure and get the URL
            imageUrl = yield (0, azureBlobService_1.uploadImageToBlob)(req.file);
        }
        const newPost = new Post_1.default({
            content,
            image: imageUrl,
        });
        const savedPost = yield newPost.save();
        res.status(201).json({ post: savedPost });
    }
    catch (err) {
        res.status(500).json({ message: 'Error saving post', error: err });
    }
});
exports.createPost = createPost;
