import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { SelectChangeEvent } from "@mui/material/Select";

import {
  foodList,
  housingList,
  insuranceList,
  transportationList,
  utilitiesList,
} from "../categoriesList";

import { useExpense } from "../context/expense-context";
import CategorySelect from "./common/selectList";

type ExpenseFormProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type ExpensesCategory =
  | "Food"
  | "Transportation"
  | "Utilities"
  | "Housing"
  | "Insurance"
  | null;

const ExpenseForm = ({ isOpen, setIsOpen }: ExpenseFormProps) => {
  const [category, setCategory] = useState<ExpensesCategory>(null);
  const { appState, dispatch } = useExpense();
  const [msg, setMsg] = useState<string | null>("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const categorySelect = formData.get("subCategory") as string;
    const amount = Number(formData.get("amount"));
    const date = formData.get("date") as string;
    const categoryType = formData.get("category") as ExpensesCategory;

    if (!title || !categorySelect || !amount || !date || !categoryType) {
      setMsg("Fill The Rest Of The Fields");
      return;
    }

    if (appState.currentExpenses + amount > appState.monthlyQuota) {
      setMsg("You Cant Spend More Then That!");
      return;
    }

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        title,
        category: categorySelect,
        amount,
        date,
        categoryType,
        id: crypto.randomUUID(),
      },
    });
    form.reset();
    setCategory(null);
    setIsOpen(false);
    setMsg(null);
  }
  function handleCategoryChange(event: SelectChangeEvent<ExpensesCategory>) {
    setCategory(event.target.value as ExpensesCategory);
  }
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
        setMsg(null);
      }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1300,
        },
        content: {
          inset: "unset",
          padding: 0,
          border: "none",
          background: "transparent",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "90vw", sm: "70vw", md: "50vw", lg: "40vw" },
          maxHeight: "90vh",
          backgroundColor: "#FFF",
          borderRadius: 2,
          padding: { xs: 2, sm: 3, md: 4 },
          boxShadow: 5,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField label="Title" name="title" fullWidth />

        <Box>
          <InputLabel>Category</InputLabel>
          <Select
            fullWidth
            value={category || ""}
            onChange={handleCategoryChange}
            displayEmpty
            name="category"
          >
            <MenuItem disabled value="">
              Select a Category
            </MenuItem>
            <MenuItem value="Food">Food & Dining</MenuItem>
            <MenuItem value="Transportation">Transportation</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Housing">Housing</MenuItem>
            <MenuItem value="Insurance">Insurance</MenuItem>
          </Select>
        </Box>

        {category === "Food" && (
          <CategorySelect
            options={foodList}
            categoryName="Food"
            name="subCategory"
          />
        )}
        {category === "Housing" && (
          <CategorySelect
            options={housingList}
            categoryName="Housing"
            name="subCategory"
          />
        )}
        {category === "Insurance" && (
          <CategorySelect
            options={insuranceList}
            categoryName="Insurance"
            name="subCategory"
          />
        )}
        {category === "Transportation" && (
          <CategorySelect
            name="subCategory"
            options={transportationList}
            categoryName="Transportation"
          />
        )}
        {category === "Utilities" && (
          <CategorySelect
            name="subCategory"
            options={utilitiesList}
            categoryName="Utilities"
          />
        )}

        <TextField type="number" label="Amount" name="amount" fullWidth />
        <TextField type="date" name="date" fullWidth />

        <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
          <Typography
            sx={{
              mr: "auto",
              fontSize: { xs: "16px" },
            }}
            color="error"
          >
            {msg}
          </Typography>
          <Button variant="contained" color="success" type="submit">
            Add Expense
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ExpenseForm;
