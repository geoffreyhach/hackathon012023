import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import EuroIcon from "@mui/icons-material/Euro";

function Liste() {
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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "30px",
      }}
    >
      {cars.map((car, index) => (
        <Card
          key={index}
          sx={{
            height: "200px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 5px 5px grey",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "90%",
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
              width: { xs: "40vw", sm: "40vw", md: "12vw" },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "15px", sm: "15px", md: "20px" },
                marginBottom: "5px",
              }}
            >
              {car.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "18px" },
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
                fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "18px" },
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
                fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "18px" },
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
                fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "18px" },
              }}
            >
              <EuroIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />
              {car.priceperday} euros/jour
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Liste;
