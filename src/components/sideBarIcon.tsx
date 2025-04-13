import { Box, Typography } from "@mui/material";
import { type ReactNode } from "react";

type SideBarIconsProps = {
  icon: ReactNode;
  text: string;
  open: boolean;
};

function SideBarIcon({ icon, text, open }: SideBarIconsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        paddingBottom: 2,
        borderBottom: open ? "1px solid black" : "",
        width: "100%",
        alignItems: "center",
      }}
    >
      {icon}
      <Typography sx={{ display: open ? "block" : "none" }}>{text}</Typography>
    </Box>
  );
}

export default SideBarIcon;
