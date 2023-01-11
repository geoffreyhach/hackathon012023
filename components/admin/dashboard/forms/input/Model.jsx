import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import axios from "axios";

const Model = ({ brand, handleChange }) => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&rows=50&facet=make&facet=model&facet=fueltype1&facet=trany&facet=year&refine.make=${brand}`
      )
      .then((res) => {
        setModels(res.data.records);
      })
      .catch((error) => console.error(error));
  }, [brand]);
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
          id="outlined-select-model"
          select
          label="Modèle"
          defaultValue=""
          onChange={handleChange(brand)}
        >
          {models
            .sort((a, b) => (a.fields.model > b.fields.model ? 1 : -1))
            .map((model) => (
              <MenuItem key={model.fields.id} value={model.fields.model}>
                {model.fields.model}
              </MenuItem>
            ))}
        </TextField>
      </div>
    </Box>
  );
};

export default Model;
