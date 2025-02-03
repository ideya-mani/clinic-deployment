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
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Post_1 = __importDefault(require("../models/Post"));
const router = express_1.default.Router();
// Ensure uploads directory exists
const uploadDir = path_1.default.join(__dirname, '../uploads');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir);
}
// Set up Multer for image uploads (you can adjust the storage configuration)
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});
// GET all posts
router.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post_1.default.find();
        res.json({ posts });
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching posts', error: err });
    }
}));
// POST a new post
router.post('/posts', upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const newPost = new Post_1.default({
        content,
        image,
    });
    try {
        const savedPost = yield newPost.save();
        res.status(201).json({ post: savedPost });
    }
    catch (err) {
        res.status(500).json({ message: 'Error saving post', error: err });
    }
}));
// PUT like a post
router.put('/posts/:postId/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    try {
        const post = yield Post_1.default.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.likes += 1;
        const updatedPost = yield post.save();
        res.status(200).json(updatedPost);
    }
    catch (err) {
        res.status(500).json({ message: 'Error liking post', error: err });
    }
}));
// POST comment on a post
router.post('/posts/:postId/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const { comment } = req.body;
    if (!comment) {
        return res.status(400).json({ message: 'Comment is required' });
    }
    try {
        const post = yield Post_1.default.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push(comment);
        const updatedPost = yield post.save();
        res.status(200).json(updatedPost);
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding comment', error: err });
    }
}));
exports.default = router;
