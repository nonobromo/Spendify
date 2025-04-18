import { Box, InputLabel, MenuItem, Select } from "@mui/material";

interface CategorySelectProps {
  categoryName: string;
  options: string[];
  name: string | undefined;
}

function CategorySelect({ options, categoryName, name }: CategorySelectProps) {
  return (
    <Box sx={{ flex: 1 }}>
      <InputLabel>{categoryName}</InputLabel>
      <Select
        fullWidth
        displayEmpty
        name={name}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#232323",
              color: "#E0E0E0",
            },
          },
        }}>
        <MenuItem disabled value="">
          Select a Category
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default CategorySelect;
