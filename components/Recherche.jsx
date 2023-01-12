import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Liste from "./Liste";
import Mapbox from "./Mapbox";
import Reservation from "./Reservation";

function Recherche({ fleet }) {
    const [hitmarker, setHitmarker] = useState(undefined);
    const [reservation, setReservation] = useState(false);
    const [carReservation, setCarReservation] = useState(undefined);

    if (reservation === false) {
        return (
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row-reverse" },
                    border: "1px solid #EAEDED",
                    borderRadius: "5px",
                    width: "95vw",
                    height: "85vh",
                    overflow: "hidden",
                    overflowY: "auto",
                    backgroundColor: "#ededea",
                }}
            >
                <Stack
                    sx={{
                        width: { xs: "90vw", md: "55vw" },
                        height: "100%",
                        margin: "auto",
                    }}
                >
                    <Mapbox
                        fleet={fleet}
                        hitmarker={hitmarker}
                        setHitmarker={setHitmarker}
                    />
                </Stack>
                <Stack
                    sx={{ width: { xs: "100%", md: "45vw" }, height: "100%" }}
                >
                    <Liste
                        fleet={fleet}
                        hitmarker={hitmarker}
                        setHitmarker={setHitmarker}
                        setReservation={setReservation}
                        setCarReservation={setCarReservation}
                    />
                </Stack>
            </Stack>
        );
    }
    return <Reservation fleet={fleet} carReservation={carReservation} />;
}

export default Recherche;
