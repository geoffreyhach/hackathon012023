import * as React from "react";
import { Box, TextField } from "@mui/material";

export default function LicensePlate({ licensePlate, handleChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Immatriculation"
          onChange={handleChange("licensePlate")}
          variant="outlined"
        />
      </div>
    </Box>
  );
}
