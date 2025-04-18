import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useExpense } from "../context/expense-context";
import ModeIcon from "@mui/icons-material/Mode";

import QoutaModal from "./qoutaModal";
import LeftToSpend from "./leftToSpend";
type QoutaFormProps = {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function QoutaForm({ setIsOpen }: QoutaFormProps) {
  const [openModal, setOpenModal] = useState(false);

  const { appState } = useExpense();

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
        gap: 1,
        height: "50vh",
      }}
    >
      <LeftToSpend />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: "#5E5E5E",
        }}
      >
        <ModeIcon
          sx={{ cursor: "pointer", color: "#5E5E5E" }}
          onClick={() => setOpenModal(true)}
        />
        <Typography
          variant="h1"
          sx={{
            color: "#5E5E5E",
            fontSize: { xs: "16px" },
          }}
        >
          MONTHLY BUDGET: NIS{appState.monthlyQuota.toLocaleString()}
        </Typography>
      </Box>

      <QoutaModal openModal={openModal} setOpenModal={setOpenModal} />
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        onClick={() => setIsOpen(true)}
        variant="contained"
      >
        Add Expense
      </Button>
    </Container>
  );
}

export default QoutaForm;
