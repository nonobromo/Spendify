import { Box, Typography } from "@mui/material";
import { useExpense } from "../context/expense-context";

function LeftToSpend() {
  const { appState } = useExpense();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        border: "1px solid black",
        padding: {
          xs: "20px 40px 20px 40px",
          sm: "40px 80px 40px 80px",
          md: "60px 120px 60px 120px",
        },
        borderRadius: "20px",
        backgroundColor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "baseline",
          height: "70px",
        }}
      >
        <Typography
          sx={{ fontSize: "28px", fontWeight: "bold", color: "#000" }}
          component="span"
        >
          NIS
        </Typography>
        <Typography
          sx={{ fontSize: "60px", fontWeight: "bold", color: "#000" }}
          component="span"
        >
          {(appState.monthlyQuota - appState.currentExpenses).toLocaleString()}
        </Typography>
      </Box>
      <Typography sx={{ color: "#686868", fontSize: "12px" }} component="span">
        LEFT TO SPEND THIS MONTH
      </Typography>
    </Box>
  );
}

export default LeftToSpend;
