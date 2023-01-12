import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import axios from "axios";

function Mapbox({ fleet, setHitmarker, hitmarker }) {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    const [marker, setMarker] = useState(undefined);
    const [geoloc, setGeoloc] = useState();
    const [viewState, setViewState] = useState({
        latitude: 48.582033,
        longitude: 7.750229,
        zoom: 12,
    });

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

    const handleGeoloc = (e) => {
        setGeoloc(e);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((e) => handleGeoloc(e));
    }, []);
    console.log(geoloc);

    useEffect(() => {
        if (geoloc)
            setViewState({
                latitude: geoloc.coords.latitude,
                longitude: geoloc.coords.longitude,
                zoom: 12,
            });
    }, [geoloc]);

    return (
        <Map
            {...viewState}
            mapboxAccessToken={accessToken}
            initialViewState={viewState}
            style={{
                width: "100%",
                height: "100vh",
                borderLeft: "1px solid #EAEDED",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker
                latitude={viewState.latitude}
                longitude={viewState.longitude}
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
