import { Box } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type ArrowProps = {
  open: boolean;
  openSideBar: () => void;
};

function SideBarArrow({ openSideBar, open }: ArrowProps) {
  return (
    <Box
      sx={{
        transform: {
          xs: open ? "translateX(100px)" : "translateX(0px)",
          sm: open ? "translateX(125px)" : "translateX(0px)",
          md: open ? "translateX(150px)" : "translateX(0px)",
          lg: open ? "translateX(175px)" : "translateX(0px)",
        },
        transition: "transform 300ms",
      }}
    >
      {open ? (
        <KeyboardDoubleArrowRightIcon onClick={openSideBar} />
      ) : (
        <KeyboardDoubleArrowLeftIcon onClick={openSideBar} />
      )}
    </Box>
  );
}

export default SideBarArrow;
