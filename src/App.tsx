import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./index.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

import MainArea from "./components/mainArea";

import { useState } from "react";
import ExpenseForm from "./components/expenseForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5F5F5  ",
        position: "relative",
      }}
    >
      <Navbar />
      <SideBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MainArea />
        <AddCircleIcon
          sx={{
            position: "absolute",
            bottom: 60,
            right: 60,
            color: "#2196F3",
            fontSize: "48px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        />
      </Box>

      <ExpenseForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
}
