"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// import timelineRoutes from './routes/timelineRoutes';
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// MongoDB connection
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medical_appointments')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));
// Routes
app.use('/patient', patientRoutes_1.default);
app.use('/admin', adminRoutes_1.default);
app.use('/auth', authRoutes_1.default);
// app.use('/api/timeline', timelineRoutes);
app.use('/api/post', postRoutes_1.default);
app.use('/patient', contactRoutes_1.default);
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
// Export the server handler for Vercel
exports.default = app;
