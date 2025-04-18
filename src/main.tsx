import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ExpenseProvider } from "./context/expense-context";
import { CategoriesStateContext } from "./context/category-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExpenseProvider>
      <CategoriesStateContext>
        <App />
      </CategoriesStateContext>
    </ExpenseProvider>
  </React.StrictMode>
);
