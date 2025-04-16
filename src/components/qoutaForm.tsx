import { Box, Button, Container, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { useExpense } from "../context/expense-context";
import { useCategoryState } from "../context/category-context";


type QoutaFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function QoutaForm({setIsOpen}: QoutaFormProps){
    const {currentCategory,  setCurrentCategory} = useCategoryState()
    const {dispatch, appState} = useExpense()
    function handleMonthlyQouta(e: FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
    
        const monthlyQuota = Number(formData.get("quota"));
        dispatch({ type: "SET_MONTHLY_QUOTA", payload: monthlyQuota });
        form.reset();
      }

    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            gap: 2
          }}>
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
        <Button variant="contained" color="success" onClick={() => setIsOpen((perv => !perv))}>
          Add Expense
        </Button>
        <Box>
          <InputLabel>Filter by</InputLabel>
          <Select
            fullWidth
            value={currentCategory || ""}
            onChange={(e) => setCurrentCategory(e.target.value)}
            displayEmpty
            name="category"
          >
            <MenuItem disabled value="">
              Select a Category
            </MenuItem>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Food">Food & Dining</MenuItem>
            <MenuItem value="Transportation">Transportation</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Housing">Housing</MenuItem>
            <MenuItem value="Insurance">Insurance</MenuItem>
          </Select>
        </Box>
        </Container>
    )
}


export default QoutaForm