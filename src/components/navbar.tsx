import { Avatar, Box } from "@mui/material";
import AppIcon from "./icon";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#2196F3",
        width: "100vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AppIcon />
      <Avatar sx={{ marginRight: "16px" }} />
    </Box>
  );
}

export default Navbar;
