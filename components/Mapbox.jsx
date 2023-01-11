import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import axios from "axios";

const fleet = [
  [48.578374, 7.756802],
  [48.586885, 7.753119],
  [48.581565, 7.738541],
  [48.593846, 7.758796],
];

function Mapbox() {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  return (
    <Map
      mapboxAccessToken={accessToken}
      initialViewState={{
        latitude: 48.58186963621235,
        longitude: 7.750978575153635,
        zoom: 12,
      }}
      style={{ width: "100%", height: "100vh", borderLeft: "1px solid black" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        latitude={48.58186963621235}
        longitude={7.750978575153635}
        anchor={"center"}
      >
        <PersonPinCircleTwoToneIcon />
      </Marker>

      {fleet.map((car) => {
        return (
          <Marker latitude={car[0]} longitude={car[1]} anchor={"center"}>
            <DirectionsCarFilledIcon />
          </Marker>
        );
      })}
    </Map>
  );
}

export default Mapbox;
