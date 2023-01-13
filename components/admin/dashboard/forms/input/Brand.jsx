import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import axios from "axios";

const Brand = ({ brand, handleChange }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&rows=50&facet=make&facet=model&facet=fueltype1&facet=trany&facet=year"
      )
      .then((res) => {
        setBrands(res.data.facet_groups[0].facets);
      })
      .catch((error) => console.error(error));
  }, []);
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
          id="outlined-select-brand"
          select
          label="Marque"
          defaultValue=""
          onChange={handleChange("brand")}
        >
          {brands
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((brand) => (
              <MenuItem key={brand.id} value={brand.name}>
                {brand.name}
              </MenuItem>
            ))}
        </TextField>
      </div>
    </Box>
  );
};

export default Brand;
