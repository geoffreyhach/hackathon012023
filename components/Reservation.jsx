import { Stack, Typography } from "@mui/material";
import React from "react";

function Reservation({ carReservation, fleet }) {
  console.log(carReservation);
  console.log(fleet);

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
      <Stack sx={{ width: "50%", height: "100%", border: "1px solid black" }}>
        {fleet[carReservation].name}
        {fleet[carReservation].name}
        {fleet[carReservation].name}
        {fleet[carReservation].name}
        {fleet[carReservation].name}
        {fleet[carReservation].name}
      </Stack>
      <Stack sx={{ width: "50%", height: "100%", border: "1px solid black" }}>
        droite
      </Stack>
    </Stack>
  );
}

export default Reservation;
