import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ExpenseProvider } from "./context/expense-context";
import { CategoriesStateContext } from "./context/category-context";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#E0E0E0",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExpenseProvider>
        <CategoriesStateContext>
          <App />
        </CategoriesStateContext>
      </ExpenseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
