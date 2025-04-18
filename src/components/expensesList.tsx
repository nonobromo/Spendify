import { Box, Container, InputLabel, MenuItem, Select } from "@mui/material";
import ExpenseCard from "./itemCard";
import { useExpense } from "../context/expense-context";
import { useCategoryState } from "../context/category-context";

function ExpenseList() {
  const { appState } = useExpense();
  const { currentCategory, setCurrentCategory } = useCategoryState();
  const categories = [
    "All",
    "Food",
    "Transportation",
    "Utilities",
    "Housing",
    "Insurance",
  ];
  const filertedCategories = appState.expenses.filter((expense) =>
    currentCategory === "All"
      ? appState.expenses
      : expense.categoryType === currentCategory
  );
  return (
    <Box>
      <Box sx={{ marginTop: "40px", color: "#E0E0E0" }}>
        <InputLabel>Filter by</InputLabel>
        <Select
          fullWidth
          value={currentCategory || ""}
          onChange={(e) => setCurrentCategory(e.target.value)}
          displayEmpty
          name="category"
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#232323",
                color: "#E0E0E0",
              },
            },
          }}>
          <MenuItem disabled value="" sx={{ color: "#E0E0E0" }}>
            Select a Category
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="All">
            All
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="Food">
            Food & Dining
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="Transportation">
            Transportation
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="Utilities">
            Utilities
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="Housing">
            Housing
          </MenuItem>
          <MenuItem sx={{ color: "#E0E0E0" }} value="Insurance">
            Insurance
          </MenuItem>
        </Select>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          marginTop: 2,
          padding: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 280px)",
            sm: "repeat(1, 280px)",
            md: "repeat(2, 280px)",
            lg: "repeat(3, 300px)",
            xl: "repeat(4, 300px)",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}>
        {filertedCategories.map((expense) => {
          return <ExpenseCard expense={expense} key={expense.id} />;
        })}
      </Container>
    </Box>
  );
}

export default ExpenseList;
