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
// Book an appointment
router.post('/bookappointment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientName, patientEmail, patientPhone, doctorName, date, timePeriod, time } = req.body;
    try {
        const newAppointment = new Appointment_1.default({
            patientName,
            patientEmail,
            patientPhone, // Include the patient's phone number
            doctorName,
            date,
            timePeriod,
            time,
        });
        yield newAppointment.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error booking appointment' });
    }
}));
// Get all appointments for patient
router.get('/appointment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientEmail } = req.query;
    try {
        const appointments = yield Appointment_1.default.find({ patientEmail });
        res.json({ appointments });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
}));
exports.default = router;
