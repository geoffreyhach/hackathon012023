import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import axios from "axios";

function Mapbox({ fleet }) {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    return (
        <Map
            mapboxAccessToken={accessToken}
            initialViewState={{
                latitude: 48.58186963621235,
                longitude: 7.750978575153635,
                zoom: 12,
            }}
            style={{ width: 600, height: 400 }}
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
                        >
                            <DirectionsCarFilledIcon />
                        </Marker>
                    );
                })}
        </Map>
    );
}

export default Mapbox;
