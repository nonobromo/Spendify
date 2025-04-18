import { Box } from "@mui/material";
import "./index.css";

import { useEffect, useState } from "react";
import ExpenseForm from "./components/expenseForm";
import AppIcon from "./components/icon";
import QoutaForm from "./components/qoutaForm";
import { useExpense } from "./context/expense-context";
import ExpenseList from "./components/expensesList";

export default function App() {
  const { appState } = useExpense();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(appState.expenses));
    localStorage.setItem("monthlyQuota", appState.monthlyQuota.toString());
  }, [appState.expenses, appState.monthlyQuota]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "#1A1A1A",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#121212",
          width: "100vw",
        }}>
        <AppIcon />
        <QoutaForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>

      <ExpenseForm setIsOpen={setIsOpen} isOpen={isOpen} />
      <ExpenseList />
    </Box>
  );
}
