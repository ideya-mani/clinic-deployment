import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const timings = [
  { day: "Sunday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Monday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Tuesday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Wednesday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Thursday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Friday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
  { day: "Saturday", consultation: "9:00 am - 9:00 pm", emergency: "8:00 am - 10:30 pm" },
];

const Timetable: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
          width: { xs: "100%", sm: "90%", md: "35%" },
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{backdropFilter: "blur(8px)", }}
      >
        <Tab label="Consultation" />
        <Tab label="Emergency" />
      </Tabs>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableBody>
            {timings.map((time) => (
              <TableRow key={time.day}>
                <TableCell>{time.day}</TableCell>
                <TableCell align="center">
                  {tabValue === 0 ? time.consultation : time.emergency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Timetable;