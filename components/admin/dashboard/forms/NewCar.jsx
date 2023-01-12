import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import DayOfBirth from "./input/DayOfBirth";
import Category from "./input/Category";
import Adress from "./input/Adress";
import Model from "./input/Model";
import Brand from "./input/Brand";
import "dayjs/locale/fr";
import LicensePlate from "./input/LicensePlate";

const NewCar = () => {
  const [address, setAddress] = useState(" ");
  const [values, setValues] = useState({
    brand: "",
    model: "",
    category: "",
    licensePlate: "",
    image: "",
    priceperday: "",
    passengers: "",
    doors: "",
    km: "",
    consumption: "",
    transmission: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  console.log(values);

  console.log(address);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    values.geoloc = [address.geoloc[1], address.geoloc[0]];

    axios.post("http://localhost:3000/api/cars", values).then((response) => {
      console.log(response.status);
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
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ pb: "1rem" }}
            >
              Nouveau Véhicule
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Brand brand={values.brand} handleChange={handleChange} />
              <Model
                model={values.model}
                brand={values.brand}
                handleChange={handleChange}
              />

              <Category
                category={values.category}
                handleChange={handleChange}
              />

              <LicensePlate
                licensePlate={values.licensePlate}
                handleChange={handleChange}
              />
            </Stack>
            <Stack>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined"
                  label="Image"
                  onChange={handleChange("image")}
                  variant="outlined"
                />
                <FormControl sx={{ m: 1, width: "120px" }}>
                  <InputLabel htmlFor="outlined">Tarif journalier</InputLabel>
                  <OutlinedInput
                    id="outlined"
                    endAdornment={
                      <InputAdornment position="end">€</InputAdornment>
                    }
                    label="Tarif journalier"
                    onChange={handleChange("priceperday")}
                  />
                </FormControl>
                <TextField
                  id="outlined-number"
                  label="Places"
                  type="number"
                  defaultValue="0"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  sx={{ m: 1, width: "60px" }}
                  onChange={handleChange("passengers")}
                />
                <TextField
                  id="outlined-number"
                  label="Portes"
                  type="number"
                  defaultValue="0"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  sx={{ m: 1, width: "60px" }}
                  onChange={handleChange("doors")}
                />

                <FormControl
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                    m: 1,
                    width: "120px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel htmlFor="outlined">Kilométrage</InputLabel>
                  <OutlinedInput
                    id="outlined"
                    endAdornment={
                      <InputAdornment position="end">km</InputAdornment>
                    }
                    label="Kilométrage"
                    onChange={handleChange("km")}
                  />
                </FormControl>
                <FormControl
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                    m: 1,
                    width: "120px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel htmlFor="outlined">Consommation</InputLabel>
                  <OutlinedInput
                    id="outlined"
                    endAdornment={
                      <InputAdornment position="end">l/100km</InputAdornment>
                    }
                    label="Consommation"
                    onChange={handleChange("consumption")}
                  />
                </FormControl>
                <FormControl
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-select-category"
                    size="small"
                    select
                    label="Boîte"
                    defaultValue=""
                    style={{ width: "60px" }}
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    onChange={handleChange("transmission")}
                  >
                    <MenuItem key="manual" value="M">
                      M
                    </MenuItem>
                    <MenuItem key="automatic" value="A">
                      A
                    </MenuItem>
                  </TextField>
                </FormControl>
              </Box>
            </Stack>
            <Stack>
              {/* Adress autofill Mapbox */}
              <Adress
                address={address}
                setAddress={setAddress}
                values={values}
                setValues={setValues}
                geoloc={values.geoloc}
                handleChange={handleChange}
              />
              {/* {console.log(address.geoloc.reverse())} */}
            </Stack>
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
                  borderRadius: "10px",
                  marginTop: "1.5rem",
                }}
                variant="contained"
                onClick={handleClick}
              >
                Ajouter
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
