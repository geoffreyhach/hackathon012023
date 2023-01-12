import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import axios from "axios";

function Mapbox({ fleet }) {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

  const MarkerClick = (car) => {
    console.log(car);
    console.log("test");
  };

  return (
    <Map
      mapboxAccessToken={accessToken}
      initialViewState={{
        latitude: 48.58186963621235,
        longitude: 7.750978575153635,
        zoom: 12,
      }}
      style={{
        width: "100%",
        height: "100vh",
        borderLeft: "1px solid #EAEDED",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        latitude={48.58186963621235}
        longitude={7.750978575153635}
        anchor={"center"}
      >
        <PersonPinCircleTwoToneIcon />
      </Marker>

      {fleet &&
        fleet.map((car) => {
          return (
            <Marker
              key={car.id}
              latitude={car.geoloc[0]}
              longitude={car.geoloc[1]}
              anchor={"center"}
              onClick={() => MarkerClick(car)}
            >
              <DirectionsCarFilledIcon />
            </Marker>
          );
        })}
    </Map>
  );
}

export default Mapbox;
