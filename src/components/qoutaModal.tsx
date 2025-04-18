import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "react-modal";
import { useExpense } from "../context/expense-context";
import { FormEvent, useState } from "react";

type QoutaModalProps = {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
};

function QoutaModal({ openModal, setOpenModal }: QoutaModalProps) {
  const [emptyQouta, setEmptyQouta] = useState(false);
  const { dispatch } = useExpense();
  function handleMonthlyQouta(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const monthlyQuota = Number(formData.get("quota"));
    if (monthlyQuota === 0) {
      setEmptyQouta(true);
      return;
    }
    dispatch({ type: "SET_MONTHLY_QUOTA", payload: monthlyQuota });
    form.reset();
    setEmptyQouta(false);
    setOpenModal(false);
  }
  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => {
        setOpenModal(false);
        setEmptyQouta(false);
      }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1300,
        },
        content: {
          inset: "unset",
          padding: 0,
          border: "none",
          background: "none",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={handleMonthlyQouta}
        sx={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fff",
          padding: 3,
        }}
      >
        <TextField
          variant="outlined"
          type="number"
          label="Set Monthly Qouta"
          name="quota"
        />
        {emptyQouta && (
          <Typography component="span" color="error">
            Qouta Cant Be Empty!
          </Typography>
        )}
        <Button type="submit" color="success" variant="contained">
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default QoutaModal;
