import * as React from "react";
import { Box, TextField } from "@mui/material";
import dynamic from "next/dynamic";

const AddressAutofill = dynamic(
  () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
  {
    ssr: false,
  }
);

export default function Adress({ value, setValue, handleChange }) {
  return (
    <Box component="form" noValidate>
      <AddressAutofill
        onRetrieve={(e) => console.log(e)}
        options={{
          language: "fr",
          country: "FR",
        }}
        value={value}
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <TextField
          required
          name="address"
          id="filled-search"
          label="Adresse"
          sx={{
            margin: "0.5rem",
            width: "100%",
          }}
          autocomplete="address-line1"
          type="text"
        />
      </AddressAutofill>
    </Box>
  );
}
