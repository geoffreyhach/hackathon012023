import React, { useState } from "react";
import axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Container, Typography, Box, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import Dashboard from "../../components/admin/nav/Dashboard";
import Head from "next/head";
import NewCar from "../../components/admin/dashboard/forms/NewCar";

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
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </GridToolbarContainer>
  );
}

export default function Cars({ fleet }) {
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

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
              rows={fleet}
              loading={!fleet}
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
                  field: "geoloc",
                  headerName: "Geolocalisation",
                  editable: true,
                  align: "center",
                  flex: 0.35,
                },
              ]}
            />
          </div>
        </Container>
        {/* {openNew &&  */}
        <NewCar />
        {/* } */}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const dbHost = process.env.DB_HOST;
  const res = await axios.get(`http://localhost:3000/api/cars`);
  const fleet = res.data.Items;
  return {
    props: {
      fleet,
    },
  };
}
