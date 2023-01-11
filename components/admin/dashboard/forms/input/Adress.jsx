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
    <AddressAutofill
      onRetrieve={(e) => handleDeparture(e)}
      options={{
        language: "fr",
        country: "FR",
      }}
      value={value}
      autoComplete="address-line1"
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      onChange={(e) => setValue(e.target.value)}
    >
      <TextField
        required
        id="demo-helper-text-misaligned-no-helper"
        label="Adresse"
        sx={{
          width: { xs: "auto", sm: "30ch" },
          marginTop: "0.5rem",
        }}
        onChange={handleChange("adress")}
      />
    </AddressAutofill>
  );
}
