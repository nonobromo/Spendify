import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ExpenseProvider } from "./context/expense-context";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#212121",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
