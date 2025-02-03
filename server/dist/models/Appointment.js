"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const appointmentSchema = new mongoose_1.default.Schema({
    patientName: { type: String, required: true },
    patientEmail: { type: String, required: true },
    patientPhone: { type: String, required: true }, // Added phone number field
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    timePeriod: { type: String, enum: ['Morning', 'Afternoon'], required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'pending' }, // pending, confirmed, completed
});
const Appointment = mongoose_1.default.model('Appointment', appointmentSchema);
exports.default = Appointment;
