import { Box, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
function AppIcon() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "8px",
        }}
        component="span"
      >
        Spendify
      </Typography>
      <MonetizationOnIcon sx={{ color: "#fff", fontSize: "36px" }} />
    </Box>
  );
}

export default AppIcon;
