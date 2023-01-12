import * as React from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const categories = [
  {
    value: "citadine",
    label: "Citadine",
  },
  {
    value: "break",
    label: "Break",
  },
  {
    value: "sport",
    label: "Sport",
  },
  {
    value: "utilitaire",
    label: "Utilitaire",
  },
];

export default function Category({ category, handleChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-category"
          select
          label="Catégorie"
          defaultValue=""
          onChange={handleChange("category")}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
