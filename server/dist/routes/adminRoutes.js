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
const Appointment_1 = __importDefault(require("../models/Appointment"));
const router = express_1.default.Router();
// Get all appointments for the doctor
router.get('/getappointments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield Appointment_1.default.find({});
        res.json({ appointments });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
}));
// Update appointment status (for doctor/admin)
router.put('/updateappointment/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const appointment = yield Appointment_1.default.findByIdAndUpdate(id, { status }, { new: true });
        res.json({ message: 'Appointment status updated', appointment });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating appointment status' });
    }
}));
exports.default = router;
