import { Card, Typography, Box } from "@mui/material";
import { useExpense } from "../context/expense-context";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
export type ExpenseCardProps = {
  title: string;
  amount: number;
  date: string;
  category: string;
  categoryType: string | null;
  id: string;
};

export default function ExpenseCard({
  expense,
}: {
  expense: ExpenseCardProps;
}) {
  const { dispatch } = useExpense();
  const [open, setOpen] = useState(false);

  function openOptions() {
    setOpen((perv) => !perv);
  }
  return (
    <Card
      sx={{
        width: "300px",
        maxWidth: { xs: "280px", sm: "280px", md: "280px", lg: "300px" },
        height: "180px",
        color: "#333",
        p: 2,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        border: "1px solid black",
        position: "relative",
      }}
    >
      <Box>
        <Typography component="span" fontSize="16px" fontWeight="700">
          NIS
        </Typography>
        <Typography component="span" fontSize="40px" fontWeight="700">
          {expense.amount}
        </Typography>
      </Box>
      <Typography color="#686868">{expense.title}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "20px",
          marginTop: 1,
          backgroundColor:
            expense.categoryType === "Food"
              ? "#FF7043"
              : expense.categoryType === "Transportation"
              ? "#42A5F5"
              : expense.categoryType === "Utilities"
              ? "#FFCA28"
              : expense.categoryType === "Housing"
              ? "#66BB6A"
              : expense.categoryType === "Insurance"
              ? "#AB47BC"
              : "white",
          padding: "8px 12px 8px 12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "#000",
          }}
        >
          {expense.categoryType}
        </Typography>
        <Typography sx={{ color: "#000" }}>{expense.date}</Typography>
      </Box>
      <MoreVertIcon
        sx={{ position: "absolute", right: 20, top: 25, cursor: "pointer" }}
        onClick={() => openOptions()}
      />
      {open && (
        <Box
          sx={{
            position: "absolute",
            right: 30,
            top: 50,
            backgroundColor: "#EEE",
            padding: 1,
          }}
        >
          <Typography
            sx={{ cursor: "pointer" }}
            component="span"
            onClick={() => dispatch({ type: "REMOVE_EXPENSE", id: expense.id })}
          >
            Remove Expense
          </Typography>
        </Box>
      )}
    </Card>
  );
}
