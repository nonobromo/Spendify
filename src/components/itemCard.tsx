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
        width: "300px",
        maxWidth: { xs: "280px", sm: "280px", md: "280px", lg: "300px" },
        height: "180px",
        backgroundColor: "#ffffff",
        color: "#333",
        p: 2,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        border: "1px solid black"
      }}
    >
      <Box>
        <Typography component="span" fontSize="16px" fontWeight="700" >NIS</Typography>
        <Typography component="span" fontSize="40px" fontWeight="700">{expense.amount}</Typography>
      </Box>
      <Typography color="#686868">{expense.title}</Typography>
      <Box sx={{display: "flex", gap: 5, alignItems: "center", justifyContent: "space-between"}}>
      <Typography sx={{borderRadius: "20px", fontSize: "16px"}}>{expense.categoryType}</Typography>
      <Typography>{expense.date}</Typography>
      </Box>
    </Card>
  );
}
