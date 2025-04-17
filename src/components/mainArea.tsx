import { Box, Container,  } from "@mui/material";

import ExpenseCard from "./itemCard";
import { useExpense } from "../context/expense-context";
import QoutaForm from "./qoutaForm";
import { useCategoryState } from "../context/category-context";

export type MainAreaProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MainArea({setIsOpen}: MainAreaProps) {

  const { appState } = useExpense();
  const {currentCategory} = useCategoryState()
  const filertedCategories = appState.expenses.filter((expense) => currentCategory === "All" ? appState.expenses : expense.categoryType === currentCategory)

  
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
      <QoutaForm setIsOpen={setIsOpen}/>
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
        {filertedCategories.map((expense) => {
          return <ExpenseCard expense={expense} key={expense.id} />;
        })}
      </Container>
    </Box>
  );
}

export default MainArea;
