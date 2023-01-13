import { Stack, Typography, CardMedia, Button, Card } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import ClearIcon from "@mui/icons-material/Clear";

function Reservation({ hitmarker, setReservation, status, setStatus }) {
  const [carReserved, setCarReserved] = useState();
  const [dateDeparture, setDateDeparture] = useState(dayjs());
  const [dateEnd, setDateEnd] = useState(dayjs());
  const [total, setTotal] = useState();

  const { data: session } = useSession();

  const back = () => {
    setReservation(false);
  };

  const handleDateDeparture = (e) => {
    setDateDeparture(e);
  };

  const dd = dayjs(dateDeparture);
  const de = dayjs(dateEnd);

  let hours = de.diff(dd, "hours");
  const days = Math.round(hours / 24);
  hours = hours - days * 24;

  const handleDatedateEnd = (e) => {
    setDateEnd(e);
  };

  const takeReservation = () => {
    const order = {
      debut: dateDeparture,
      fin: dateEnd,
      car_id: hitmarker,
      users_id: session.user.id,
      amount: total,
    };
    axios.post(`http://localhost:3000/api/booking `, order).then((res) => {
      if (res.status === 200) {
        console.log("Reservation pris en compte");
        setStatus(true);
      }
    });
  };

  const endpoint = process.env.DB_HOST;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cars/${hitmarker}`)
      .then((res) => setCarReserved(res.data.Item))
      .catch((error) => console.error(error));
  }, [hitmarker]);

  useEffect(() => {
    let x = 0;
    if (carReserved) x = ` ${carReserved.priceperday}`;
    let y = days;
    setTotal(x * y);
  }, [dateDeparture, dateEnd]);

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
          position: "relative",
        }}
        style={{ scrollbarWidth: "none" }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: "2em",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRight: { xs: "none", md: "5px solid #d4d4b5" },
            borderBottom: { xs: "5px solid #d4d4b5", md: "none" },
            backgroundColor: "#EAEDED",
            gap: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              width: "60%",
            }}
            image={carReserved.image}
          />
          <Stack
            sx={{
              backgroundColor: "#EAEDED",
              width: "40vw",
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              fontFamily: "Roboto Mono",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Roboto Mono",
                gap: "10px",
              }}
            >
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.brand}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.model}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.category}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.doors}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.consumption}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.4em", md: "1.5em" } }}>
                {carReserved.priceperday} Euros / jour
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#EAEDED",
            padding: "2em",
            width: { xs: "100%", md: "50%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Roboto Mono",
            gap: "2.5em",
          }}
        >
          <ClearIcon
            onClick={back}
            sx={{ position: "absolute", top: "10px", right: "10px" }}
          >
            Revenir à la selection{" "}
          </ClearIcon>

          <Stack sx={{ width: { xs: "50vw", md: "15vw" }, height: "auto" }}>
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
          <Stack sx={{ width: { xs: "50vw", md: "15vw" }, height: "auto" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} variant="standard" fullWidth />
                )}
                label="Date de retour"
                ampm={false}
                value={dateEnd}
                onChange={(e) => handleDatedateEnd(e)}
                minDate={dayjs()}
              />
            </LocalizationProvider>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "1.7em" }}>
              <strong>Prix total:</strong>
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "2em" }}>
              <strong>{total} Euros</strong>
            </Typography>
          </Stack>
          <Stack>
            {!status ? (
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xs: "35vw",
                    md: "15vw",
                    lg: "10vw",
                  },
                }}
                onClick={takeReservation}
              >
                <Typography>Reserver</Typography>
              </Button>
            ) : (
              <Typography sx={{ fontSize: "1.5em", textAlign: "center" }}>
                Votre reservation à bien été pris en compte.{" "}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

export default Reservation;
