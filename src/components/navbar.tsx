import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AppIcon from "./icon";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Home", "Reports", "About"];

  return (
    <Box
      sx={{
        backgroundColor: "#2196F3",
        width: "100vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppIcon />
      </Box>


      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 2,
        }}
      >
        {menuItems.map((item) => (
          <Typography
            key={item}
            component="a"
            sx={{ color: "white", cursor: "pointer" }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* Mobile Menu Icon */}
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton onClick={handleOpen} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

            <MenuItem onClick={handleClose} sx={{display: "flex", gap: 1, }}>
            {<HomeIcon/>} Home 
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{display: "flex", gap: 1, }}>
            {<CalendarTodayIcon/>} Reports 
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{display: "flex", gap: 1, }}>
            {<HelpIcon/>} About 
            </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default Navbar;
