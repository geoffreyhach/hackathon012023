import { Stack } from "@mui/material";
import React, { useState } from "react";
import Liste from "./Liste";
import Mapbox from "./Mapbox";

function Recherche({ fleet }) {
  const [hitmarker, setHitmarker] = useState(undefined);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        border: "1px solid #EAEDED",
        borderRadius: "20px",
        width: "90vw",
        height: "80vh",
        overflow: "hidden",
        overflowY: "auto",
        backgroundColor: "#EAEDED",
      }}
    >
      <Stack sx={{ width: { xs: "100%", md: "55vw" }, height: "100%" }}>
        <Mapbox
          fleet={fleet}
          hitmarker={hitmarker}
          setHitmarker={setHitmarker}
        />
      </Stack>
      <Stack sx={{ width: { xs: "100%", md: "45vw" }, height: "100%" }}>
        <Liste
          fleet={fleet}
          hitmarker={hitmarker}
          setHitmarker={setHitmarker}
        />
      </Stack>
    </Stack>
  );
}

export default Recherche;
