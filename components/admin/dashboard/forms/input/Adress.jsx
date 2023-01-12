import React, { useState, useEffect, useRef } from "react";
import { Box, TextField } from "@mui/material";
import dynamic from "next/dynamic";

const AddressAutofill = dynamic(
  () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
  {
    ssr: false,
  }
);

export default function Adress({ address, setAddress, geoloc, handleChange }) {
  const ref = useRef();

  useEffect(() => {
    if (address && ref.current) ref.current.value = address.address;
  }, [address]);

  const handleRetrieve = (e) => {
    setAddress({
      address: e.features[0].properties.place_name,
      geoloc: e.features[0].geometry.coordinates,
    });
    console.log(address);
  };
  return (
    <Box component="form" noValidate>
      <AddressAutofill
        onRetrieve={(e) => handleRetrieve(e)}
        options={{
          language: "fr",
          country: "FR",
        }}
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <TextField
          required
          name="address"
          id="filled-search"
          inputRef={ref}
          label="Adresse"
          sx={{
            margin: "0.5rem",
            width: "100%",
          }}
          autocomplete="address-line1"
          type="text"
          onChange={handleChange("geoloc")}
        />
      </AddressAutofill>
    </Box>
  );
}
