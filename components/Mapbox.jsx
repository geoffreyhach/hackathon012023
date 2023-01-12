import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import axios from "axios";

function Mapbox({ fleet, setHitmarker, hitmarker }) {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    const [marker, setMarker] = useState(undefined);

    function MarkerClick(car) {
        if (marker !== hitmarker && marker !== undefined) {
            return setMarker(car.id);
        } else {
            return setMarker(car.id);
        }
    }

    useEffect(() => {
        setHitmarker(marker);
    }, [marker]);

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
                            latitude={car.geoloc[0] || -31.721915}
                            longitude={car.geoloc[1] || -48.263998}
                            anchor={"center"}
                            onClick={() => MarkerClick(car)}
                        >
                            <DirectionsCarFilledIcon
                                sx={{
                                    color: car.id === hitmarker ? "red" : null,
                                }}
                            />
                        </Marker>
                    );
                })}
        </Map>
    );
}

export default Mapbox;
