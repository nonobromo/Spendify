import { Box, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
function AppIcon() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "8px",
          color: "",
        }}
        component="span"
      >
        Spendify
      </Typography>
      <MonetizationOnIcon sx={{ color: "#000", fontSize: "36px" }} />
    </Box>
  );
}

export default AppIcon;
