import { Stack } from "@mui/material";
import React from "react";
import Liste from "./Liste";
import Mapbox from "./Mapbox";

function Recherche() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        border: "1px solid black",
        borderRadius: "20px",
        width: "90%",
        height: "90vh",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      <Stack
        sx={{ width: { xs: "100%", md: "60vw", lg: "70vw" }, height: "100%" }}
      >
        <Mapbox />
      </Stack>
      <Stack
        sx={{ width: { xs: "100%", md: "40vw", lg: "30vw" }, height: "100%" }}
      >
        <Liste />
      </Stack>
    </Stack>
  );
}

export default Recherche;
