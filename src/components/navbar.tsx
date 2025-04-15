import {  Box } from "@mui/material";
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
    </Box>
  );
}

export default Navbar;
