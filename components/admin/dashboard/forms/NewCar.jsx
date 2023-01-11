import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Alert, Box, Button, Container, Paper, Snackbar } from "@mui/material";
import { Stack } from "@mui/system";
import DayOfBirth from "./input/DayOfBirth";
import Category from "./input/Category";
import Adress from "./input/Adress";
import Model from "./input/Model";
import Brand from "./input/Brand";
import "dayjs/locale/fr";

const NewCar = () => {
  const [value, setValue] = useState(dayjs());
  const [values, setValues] = useState({
    brand: "",
    name: "",
    licensePlate: "",
    location: "",
    firstname: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/signup", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
        console.log(response.data);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Stack
        style={{
          alignItems: "center",
        }}
      >
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: "1rem", sm: "2rem" },
              backgroundColor: "primary.lighter",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Brand brand={values.brand} handleChange={handleChange} />
              {console.log(values.brand)}
              <Model brand={values.brand} handleChange={handleChange} />

              <Category />
            </Stack>

            {/* Adress autofill Mapbox */}
            <Box>
              <Adress handleChange={handleChange} />
            </Box>

            {/* Day of birth */}
            <DayOfBirth value={value} setValue={setValue} required />

            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Button
                elevation={3}
                data="signup"
                sx={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "50%",
                  marginTop: "1.5rem",
                }}
                variant="contained"
                onClick={handleClick}
              >
                S'inscrire
              </Button>
            </Stack>
          </Box>
        </Paper>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "center", vertical: "center" }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Les mots de passe doivent <strong>correspondre</strong>
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
};

export default NewCar;
