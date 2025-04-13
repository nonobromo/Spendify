import { createContext, ReactNode, useContext, useReducer } from "react";

type ExpenseData = {
  title: string;
  category: string;
  amount: number;
  date: string;
  categoryType: string | null;
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

type AppActions =
  | { type: "ADD_EXPENSE"; payload: ExpenseData }
  | { type: "REMOVE_EXPENSE"; amount: number }
  | { type: "SET_MONTHLY_EXPENSES"; payload: number };

function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        currentExpenses: state.currentExpenses + action.payload.amount,
      };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        currentExpenses: Math.max(0, state.currentExpenses - action.amount),
      };
    case "SET_MONTHLY_EXPENSES":
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
  const [appState, dispatch] = useReducer(reducer, initialState);

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
