import { createContext, ReactNode, useContext, useReducer } from "react";

type ExpenseData = {
  title: string;
  category: string;
  amount: number;
  date: string;
  categoryType: string | null;
  id: string
};

type AppState = {
  monthlyQuota: number;
  currentExpenses: number;
  expenses: ExpenseData[];
};

const initialState: AppState = {
  monthlyQuota: 0,
  currentExpenses: 0,
  expenses: [],
};

function init(initial: AppState): AppState {
  const expensesRaw = localStorage.getItem("expenses");
  const quotaRaw = localStorage.getItem("monthlyQuota");

  const parsedExpenses = expensesRaw ? JSON.parse(expensesRaw) : [];

  const total = parsedExpenses.reduce(
    (sum: number, expense: ExpenseData) => sum + expense.amount,
    0
  )

  return {
    ...initial,
    expenses: parsedExpenses,
    currentExpenses: total,
    monthlyQuota: quotaRaw ? parseFloat(quotaRaw) : 0,
  };
}

type AppActions =
  | { type: "ADD_EXPENSE"; payload: ExpenseData }
  | { type: "REMOVE_EXPENSE"; id: string }
  | { type: "SET_MONTHLY_QUOTA"; payload: number }

function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        currentExpenses: state.currentExpenses + action.payload.amount,
      };
      case "REMOVE_EXPENSE": {
        const updatedExpenses = state.expenses.filter((exp) => exp.id !== action.id);
        const newTotal = updatedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
        return {
          ...state,
          expenses: updatedExpenses,
          currentExpenses: newTotal,
        };
      }
    case "SET_MONTHLY_QUOTA":
      return {
        ...state,
        monthlyQuota: action.payload,
      };

    default:
      return state;
  }
}
const ExpenseContext = createContext<
  | {
      appState: AppState;
      dispatch: React.Dispatch<AppActions>;
    }
  | undefined
>(undefined);

export function ExpenseProvider({ children }: { children: ReactNode }) {
  const [appState, dispatch] = useReducer(reducer, initialState, init);

  return (
    <ExpenseContext.Provider value={{ appState, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () => {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error("No Context Provided");
  }

  return context;
};
