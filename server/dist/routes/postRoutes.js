"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
// Set up multer storage for temporary files
const upload = (0, multer_1.default)({ dest: 'uploads/' });
// Post routes
router.post('/image', upload.single('image'), postController_1.createPost); // Single image upload
exports.default = router;
