// src/pages/AdminDashboard.tsx
import React from "react";
import { Typography, Box } from "@mui/material";
import AppointmentTable from "../SubComponents/AppointmentTable";

const AdminDashboard: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <AppointmentTable/>
    </Box>
  );
};

export default AdminDashboard;
