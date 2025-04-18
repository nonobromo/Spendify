import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useExpense } from "../context/expense-context";
import ModeIcon from "@mui/icons-material/Mode";
import Modal from "react-modal";
type QoutaFormProps = {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function QoutaForm({ setIsOpen }: QoutaFormProps) {
  const [openModel, setOpenModal] = useState(false);
  const [emptyQouta, setEmptyQouta] = useState(false);
  const { dispatch, appState } = useExpense();
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
    setOpenModal((perv) => !perv);
    setEmptyQouta(false);
  }

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
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          border: "1px solid black",
          padding: "60px 100px 60px 100px",
          borderRadius: "20px",
          backgroundColor: "#00E676",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "baseline",
            height: "70px",
          }}>
          <Typography
            sx={{ fontSize: "28px", fontWeight: "bold", color: "#fff" }}
            component="span">
            NIS
          </Typography>
          <Typography
            sx={{ fontSize: "60px", fontWeight: "bold", color: "#fff" }}
            component="span">
            {(
              appState.monthlyQuota - appState.currentExpenses
            ).toLocaleString()}
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#f1f1f1", fontSize: "12px" }}
          component="span">
          LEFT TO SPEND THIS MONTH
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "#5E5E5E",
        }}>
        <ModeIcon
          sx={{ cursor: "pointer", color: "#f1f1f1" }}
          onClick={() => setOpenModal((perv) => !perv)}
        />
        <Typography
          variant="h1"
          sx={{
            color: "#f1f1f1",
            fontSize: { xs: "16px" },
          }}>
          MONTHLY BUDGET: NIS{appState.monthlyQuota.toLocaleString()}
        </Typography>
      </Box>

      <Modal
        ariaHideApp={false}
        isOpen={openModel}
        onRequestClose={() => setOpenModal(false)}
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
        }}>
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
          }}>
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
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
      <Button
        onClick={() => setIsOpen(true)}
        sx={{ backgroundColor: "#1E88E5", color: "#fff" }}>
        Add Expense
      </Button>
    </Container>
  );
}

export default QoutaForm;
