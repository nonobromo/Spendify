import { Box } from "@mui/material";
import "./index.css";
import Navbar from "./components/navbar";

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
        overflowX: "hidden",
      }}
    >
      <Navbar />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MainArea setIsOpen={setIsOpen}/>
      </Box>

      <ExpenseForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
}
