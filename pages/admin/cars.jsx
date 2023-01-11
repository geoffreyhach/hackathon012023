import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Container, Typography, Box, Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Dashboard from "../../components/admin/nav/Dashboard";
import Head from "next/head";

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Button onClick={() => window.location.reload()}>
        <CachedIcon />
        Actualiser
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Cars() {
  const dataCars = {
    id: 1,
    name: "PEUGEOT 208",
    category: "Citadine",
    dispo: "",
    image:
      "https://www.peugeot.fr/content/dam/peugeot/france/b2c/odm/2022/decembre-2022/offre-hiver/tranche-odm-hp/PEUGEOT_e208_800x600.jpg?imwidth:1920",
    priceperday: "55",
    nbpassengers: "5",
    nbdoors: "3",
    km: "25000",
    consumption: "1.1",
    transmission: "auto",
    longitude: "55",
    lattitude: "47",
  };

  const [cars, setCars] = useState([dataCars]);

  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  // useEffect(() => {
  // axios;
  // .get("http://")
  // .then((res) => {
  //   // setCars(res.data);
  //   console.log(res.data);
  // })
  // .catch((error) => console.error(error));
  // setCars(dataCars);
  // setCars(dataCars);
  // }, []);

  const title = "Véhicules";

  return (
    <>
      <Head>
        <title> Véhicules | WILDCARS </title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <Dashboard title={title} />

        <Container style={{ marginTop: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Véhicules
          </Typography>

          <div
            style={{ height: "90vh", width: "100%", backgroundColor: "#fff" }}
          >
            <DataGrid
              rows={cars}
              loading={!cars}
              components={{
                Toolbar: CustomToolbar,
              }}
              // editMode="row"
              checkboxSelection={checkboxSelection}
              experimentalFeatures={{ newEditingApi: true }}
              columns={[
                { field: "id", headerName: "ID", editable: true, flex: 0.1 },
                {
                  field: "name",
                  headerName: "Véhicule",
                  editable: true,
                  flex: 0.25,
                },
                {
                  field: "category",
                  headerName: "Catégorie",
                  editable: true,
                  flex: 0.2,
                },
                {
                  field: "dispo",
                  headerName: "Disponibilité",
                  editable: true,
                  flex: 0.25,
                },
                {
                  field: "image",
                  headerName: "Image",
                  editable: true,
                  flex: 0.2,
                },
                {
                  field: "priceperday",
                  headerName: "Tarif",
                  editable: true,
                  align: "center",
                  flex: 0.16,
                  valueFormatter: ({ value }) =>
                    currencyFormatter.format(value),
                },
                {
                  field: "nbpassengers",
                  headerName: "Passagers",
                  editable: true,
                  align: "center",
                  flex: 0.17,
                },
                {
                  field: "nbdoors",
                  headerName: "Portes",
                  editable: true,
                  align: "center",
                  flex: 0.13,
                },
                {
                  field: "km",
                  headerName: "KM",
                  editable: true,
                  align: "center",
                  flex: 0.16,
                },
                {
                  field: "consumption",
                  headerName: "l/100km",
                  editable: true,
                  align: "center",
                  flex: 0.16,
                },
                {
                  field: "transmission",
                  headerName: "Transmission",
                  editable: true,
                  align: "center",
                  flex: 0.22,
                },
                {
                  field: "longitude",
                  headerName: "Longitude",
                  editable: true,
                  align: "center",
                  flex: 0.16,
                },
                {
                  field: "attitude",
                  headerName: "Lattitude",
                  editable: true,
                  align: "center",
                  flex: 0.16,
                },
              ]}
            />
          </div>
        </Container>
      </Box>
    </>
  );
}
