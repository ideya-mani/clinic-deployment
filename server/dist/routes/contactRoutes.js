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
const Contact_1 = __importDefault(require("../models/Contact"));
const router = express_1.default.Router();
// Handle contact form submission
router.post('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, subject, message } = req.body;
    try {
        // Create a new contact message
        const newContact = new Contact_1.default({
            name,
            email,
            phone,
            subject,
            message,
        });
        // Save the contact message to the database
        yield newContact.save();
        // Send a success response
        res.status(200).json({ message: 'Message sent successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending message' });
    }
}));
exports.default = router;
