import { Card, Typography, Box, Button } from "@mui/material";
import { useExpense } from "../context/expense-context";

export type ExpenseCardProps = {
  title: string;
  amount: number;
  date: string;
  category: string;
  categoryType: string | null;
  id: string
};

export default function ExpenseCard({
  expense,
}: {
  expense: ExpenseCardProps;
}) {
  const {dispatch} = useExpense()
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "200px", sm: "250px", md: "300px", lg: "100%" },
        backgroundColor: "#ffffff",
        color: "#333",
        p: 2,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{fontSize: {xs: "16px", sm: "20px", md: "24px", lg: "24px"}}}>Title: {expense.title}</Typography>
      <Typography>Added: {expense.date}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          marginTop: 2,
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
          padding: 1,
          borderRadius: 3,
        }}
      >
        <Typography color="white" component="span">
          {expense.amount} ₪
        </Typography>
        <Typography color="white">{expense.category}</Typography>
      </Box>

      <Button variant="contained" color="error" onClick={() => dispatch({type: "REMOVE_EXPENSE", id: expense.id})}> Remove</Button>
    </Card>
  );
}
