import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SnowmobileIcon from "@mui/icons-material/Snowmobile";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

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

    useEffect(() => {
        if (geoloc)
            setViewState({
                latitude: geoloc.coords.latitude,
                longitude: geoloc.coords.longitude,
                zoom: 12,
            });
    }, [geoloc]);

    const getVehicleIcon = (category, id) => {
        const style = {
            color: id === hitmarker ? "red" : "primary.main",
            fontSize: id === hitmarker ? "38px" : "24px",
            transition: "font-size 500ms",
        };
        if (category === "citadine") {
            return <DirectionsCarFilledIcon sx={style} />;
        }
        if (category === "utilitaire") {
            return <LocalShippingIcon sx={style} />;
        }
        if (category === "snowmobile") {
            return <SnowmobileIcon sx={style} />;
        }
        if (category === "boat") {
            return <DirectionsBoatIcon sx={style} />;
        }
        if (category === "moto") {
            return <TwoWheelerIcon sx={style} />;
        }

        return <DirectionsCarFilledIcon sx={style} />;
    };

    return (
        <Map
            {...viewState}
            mapboxAccessToken={accessToken}
            initialViewState={viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{
                width: "100%",
                height: "100vh",
                borderLeft: "1px solid #EAEDED",
            }}
            mapStyle="mapbox://styles/geoffreyhach/clct8fx0m001e14mto6fn0it8"
        >
            <Marker
                latitude={geoloc?.coords.latitude || 48.582033}
                longitude={geoloc?.coords.longitude || 7.750229}
                anchor={"center"}
            >
                <LocationOnOutlinedIcon fontSize="large" color="success" />
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
                            {getVehicleIcon(car.category, car.id)}
                        </Marker>
                    );
                })}
        </Map>
    );
}

export default Mapbox;
