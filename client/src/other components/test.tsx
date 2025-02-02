import { Box, Card, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Timer from "../assets/timer.svg";
// import Dot from "../assets/badge.svg";
 
const BreachComponent = () => {
  const cards = [
    {
      id: "#TO152",
      title: "Payment Gateway Error",
      priority: "High Priority",
      dueDate: "12 May, 2024",
      timeLeft: "2:58",
    },
    {
      id: "#TO153",
      title: "User Interface Bug",
      priority: "Medium Priority",
      dueDate: "15 May, 2024",
      timeLeft: "3:20",
    },
    {
      id: "#TO154",
      title: "Database Connection Issue",
      priority: "Low Priority",
      dueDate: "18 May, 2024",
      timeLeft: "1:40",
    },
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("slide-in-left");
 
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setAnimationDirection("slide-in-left");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
 
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationDirection("slide-in-right");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
 
  const currentCard = cards[currentIndex];
  const leftToText = () => {
    switch (currentCard.priority) {
      case "High Priority":
        return "Left to breach";
      case "Medium Priority":
        return "Left to fix";
      case "Low Priority":
        return "Left to resolve";
      default:
        return "";
    }
  };
 
  return (
    <Box
      sx={{
        borderRadius: "27px",
        backgroundColor: "#EFEEFF",
        padding: { xs: "15px", sm: "20px", md: "30px" },
        maxWidth: { xs: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" },
        margin: "auto",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          SLA Breach Risk
        </Typography>
        <Box
          sx={{
            borderRadius: "4px",
            padding: "5px 10px",
            backgroundColor: "#6915B4",
            color: "white",
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
          }}
        >
          12
        </Box>
      </Box>
 
      {/* Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        {/* Previous Button */}
        <IconButton
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{
            height: "40px",
            width: "40px",
            backgroundColor: currentIndex === 0 ? "#e0e0e0" : "#ece7fd",
          }}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: "16px",
              color: currentIndex === 0 ? "#C7C7C7" : "black",
            }}
          />
        </IconButton>
 
        {/* Card */}
        <Box
          sx={{
            flex: 1,
            animation: `${animationDirection} 0.5s ease`,
            maxWidth: "100%",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "16px", md: "24px" },
              gap: "16px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              borderRadius: "16px",
            }}
          >
            {/* Ticket Info */}
            <Box sx={{ flex: 1, textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                  fontWeight: 600,
                  color: "#6915B4",
                }}
              >
                {currentCard.id}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {currentCard.title}
                </Typography>
                {/* <img src={Dot} alt="Badge" /> */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                    color: "#F64C4C",
                  }}
                >
                  {currentCard.priority}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  color: "#757575",
                }}
              >
                Due Date: {currentCard.dueDate}
              </Typography>
            </Box>
 
            {/* Timer Section */}
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                {/* <img src={Timer} alt="timer" /> */}
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    fontWeight: 600,
                    color: "#EC2D30",
                  }}
                >
                  {currentCard.timeLeft}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  color: "#919EAB",
                }}
              >
                {leftToText()}
              </Typography>
            </Box>
          </Card>
        </Box>
 
        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          sx={{
            height: "40px",
            width: "40px",
            backgroundColor:
              currentIndex === cards.length - 1 ? "#e0e0e0" : "#f4f1fc",
            "&:hover": {
              backgroundColor:
                currentIndex === cards.length - 1 ? "#e0e0e0" : "#ece7fd",
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: "16px",
              color: currentIndex === cards.length - 1 ? "#C7C7C7" : "black",
            }}
          />
        </IconButton>
      </Box>
 
      {/* Animations */}
      <style>
        {`
          @keyframes slide-in-left {
            from {
              transform: translateX(10%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slide-in-right {
            from {
              transform: translateX(-10%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};
 
export default BreachComponent;
 
 