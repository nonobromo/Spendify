import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import SideBarArrow from "./arrow";
import SideBarIcon from "./sideBarIcon";
function SideBar() {
  const [open, isOpen] = useState<boolean>(false);

  function openSideBar() {
    isOpen((perv) => !perv);
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        width: {
          xs: open ? "125px" : "25px",
          sm: open ? "150px" : "25px",
          md: open ? "175px" : "25px",
          lg: open ? "200px" : "25px",
        },

        alignItems: "flex-start",
        transition: "300ms",
        bgcolor: "#fff",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: 1,
        position: "absolute",
        marginTop: "10vh",
      }}
    >
      <SideBarArrow openSideBar={openSideBar} open={open} />

      <SideBarIcon text="Expenses" open={open} icon={<CalendarTodayIcon />} />
      <SideBarIcon text="Home" open={open} icon={<HomeIcon />} />
      <SideBarIcon text="About" open={open} icon={<HelpIcon />} />
    </Box>
  );
}

export default SideBar;
