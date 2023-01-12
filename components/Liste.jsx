import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import EuroIcon from "@mui/icons-material/Euro";

function Liste({ fleet, setHitmarker, hitmarker }) {
  const cars = [
    {
      id: 1,
      category: "Citadine",
      name: "PEUGEOT 208",
      dispo: "",
      image:
        "https://www.peugeot.fr/content/dam/peugeot/france/b2c/odm/2022/decembre-2022/offre-hiver/tranche-odm-hp/PEUGEOT_e208_800x600.jpg?imwidth=1920",
      priceperday: "55",
      nbpassengers: "5",
      nbdoors: "3",
      km: "25000",
      consumption: "1.7",
      transmission: "automatique",
      longitude: "55",
      lattitude: "47",
    },
    {
      id: 1,
      name: "PEUGEOT 308",
      dispo: "",
      image:
        "https://www.peugeot.fr/content/dam/peugeot/france/b2c/odm/2022/decembre-2022/offre-hiver/tranche-odm-hp/PEUGEOT_308_PHEV_800x600.jpg?imwidth=1920",
      priceperday: "230",
      nbpassengers: "5",
      nbdoors: "3",
      km: "25000",
      consumption: "2.5",
      transmission: "manuelle",
      longitude: "55",
      lattitude: "47",
    },
    {
      id: 1,
      name: "PEUGEOT 3008",
      dispo: "",
      image:
        "https://www.peugeot.fr/content/dam/peugeot/france/b2c/odm/2022/decembre-2022/offre-hiver/tranche-odm-hp/PEUGEOT_3008_PHEV_800x600.jpg?imwidth=1920",
      priceperday: "122",
      nbpassengers: "5",
      nbdoors: "3",
      km: "25000",
      consumption: "1.1",
      transmission: "automatique",
      longitude: "55",
      lattitude: "47",
    },
  ];

  function MarkerClick(car) {
    setHitmarker(car.id);
  }

  return (
    <Stack
      sx={{
        overflow: { md: "hidden" },
        overflowY: { md: "auto" },
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        {fleet.map((car, index) => (
          <Card
            key={index}
            sx={{
              height: "20vh",
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              border: car.id === hitmarker ? "5px solid black" : null,
            }}
            onClick={() => MarkerClick(car)}
          >
            <CardMedia
              component="img"
              sx={{
                height: "auto",
                width: "50%",
              }}
              image={car.image}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                width: { xs: "40vw", sm: "40vw", md: "18vw" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1em",
                  marginBottom: "10px",
                }}
              >
                <strong>{car.name}</strong>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8em",
                }}
              >
                <PeopleIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />
                {car.nbpassengers}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8em",
                }}
              >
                <AlignVerticalCenterIcon
                  sx={{ fontSize: { xs: "small", sm: "medium" } }}
                />
                {car.transmission}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8em",
                }}
              >
                <AvTimerIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />
                {car.consumption}L/100km
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8em",
                }}
              >
                <EuroIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />
                {car.priceperday} euros/jour
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}

export default Liste;
