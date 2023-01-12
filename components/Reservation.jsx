import { Stack, Typography, CardMedia, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

function Reservation({ hitmarker, fleet }) {
  const [carReserved, setCarReserved] = useState();
  const [dateDeparture, setDateDeparture] = useState(dayjs());
  const [dateEnd, setDateEnd] = useState(dayjs());

  const handleDateDeparture = (e) => {
    setDateDeparture(e);
  };

  const handleDatedateEnd = (e) => {
    setDateEnd(e);
  };

  const takeReservation = () => {};

  console.log(dateDeparture);

  // const order = {
  //   dateDeparture,
  //   dateEnd,
  // };

  // axios.post(`${endpoint}/??`, order, {
  //   validateStatus: function (status) {
  //     return status < 500;
  //   },
  // });

  const endpoint = process.env.DB_HOST;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cars/${hitmarker}`)
      .then((res) => setCarReserved(res.data.Item))
      .catch((error) => console.error(error));
  }, [hitmarker]);

  if (carReserved) {
    return (
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          border: "1px solid #EAEDED",
          borderRadius: "5px",
          width: "95vw",
          height: "85vh",
          overflow: "hidden",
          overflowY: "auto",
          backgroundColor: "#EAEDED",
        }}
      >
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              width: "50%",
            }}
            image={carReserved.image}
          />
          <Typography>{carReserved.brand}</Typography>
          <Typography>{carReserved.model}</Typography>
          <Typography>{carReserved.category}</Typography>
          <Typography>{carReserved.doors}</Typography>
          <Typography>{carReserved.consumption}</Typography>
        </Stack>
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack>
            <Typography>{carReserved.priceperday} Euros / jour</Typography>
          </Stack>
          <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} variant="standard" fullWidth />
                )}
                label="Date de depart"
                ampm={false}
                value={dateDeparture}
                onChange={(e) => handleDateDeparture(e)}
                minDate={dayjs()}
              />
            </LocalizationProvider>
          </Stack>
          <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} variant="standard" fullWidth />
                )}
                label="Date de fin"
                ampm={false}
                value={dateEnd}
                onChange={(e) => handleDatedateEnd(e)}
                minDate={dayjs()}
              />
            </LocalizationProvider>
          </Stack>
          <Stack>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "35vw", md: "15vw", lg: "10vw" },
              }}
              onClick={takeReservation}
            >
              <Typography>Reserver</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

export default Reservation;
