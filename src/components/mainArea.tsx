import { Box, Button, Container, TextField, Typography } from "@mui/material";

import ExpenseCard from "./itemCard";
import { useExpense } from "../context/expense-context";
import { FormEvent, useEffect } from "react";

function MainArea() {
  function handleMonthlyQouta(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const monthlyQuota = Number(formData.get("quota"));
    dispatch({ type: "SET_MONTHLY_QUOTA", payload: monthlyQuota });
    form.reset();
  }
  const { appState, dispatch } = useExpense();
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(appState.expenses));
    localStorage.setItem("monthlyQuota", appState.monthlyQuota.toString());
  }, [appState.expenses, appState.monthlyQuota]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "16px", sm: "30px", md: "36px", lg: "40px" },
        }}
      >
        This Month I Can Spend : {appState.monthlyQuota} ₪
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "30px" },
          marginTop: "10px",
        }}
      >
        I have{" "}
        {appState.monthlyQuota - appState.currentExpenses}{" "}
        ₪ left to spend
      </Typography>
      <Box
        component="form"
        onSubmit={handleMonthlyQouta}
        sx={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          type="number"
          label="Set Monthly Qouta"
          name="quota"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 2,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {appState.expenses.map((expense) => {
          return <ExpenseCard expense={expense} key={expense.id} />;
        })}
      </Container>
    </Box>
  );
}

export default MainArea;
