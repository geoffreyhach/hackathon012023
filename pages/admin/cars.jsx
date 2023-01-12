import React, { useState } from "react";
import axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CachedIcon from "@mui/icons-material/Cached";
import Dashboard from "../../components/admin/nav/Dashboard";
import Head from "next/head";
import NewCar from "../../components/admin/dashboard/forms/NewCar";
import { ClickAwayListener } from "@mui/base";

function CustomToolbar() {
  const [openNew, setOpenNew] = useState(false);
  const handleClickAway = () => {
    setOpenNew(false);
  };
  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      {!openNew && (
        <>
          <Button onClick={() => window.location.reload()}>
            <CachedIcon />
            Actualiser
          </Button>
          <GridToolbarExport />
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={() => setOpenNew(!openNew)}
          >
            <AddIcon />
          </Fab>
        </>
      )}
      {openNew && (
        <Container
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              display: "flex",

              alignItems: "flex-start",
              flexDirection: "row-reverse",
            }}
          >
            <Button onClick={() => setOpenNew(false)}>
              <CloseIcon />
            </Button>

            <ClickAwayListener onClickAway={handleClickAway}>
              <NewCar />
            </ClickAwayListener>
          </div>
        </Container>
      )}
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
                  field: "brand",
                  headerName: "Marque",
                  editable: true,
                  flex: 0.25,
                },
                {
                  field: "model",
                  headerName: "Modèle",
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
                  field: "licensePlate",
                  headerName: "Immatriculation",
                  editable: true,
                  flex: 0.2,
                },
                {
                  field: "location",
                  headerName: "Adresse",
                  editable: true,
                  align: "center",
                  flex: 0.35,
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
                  flex: 0.2,
                  valueFormatter: ({ value }) =>
                    currencyFormatter.format(value),
                },
                {
                  field: "passengers",
                  headerName: "Places",
                  editable: true,
                  align: "center",
                  flex: 0.13,
                },
                {
                  field: "doors",
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
                  headerName: "Boîte",
                  editable: true,
                  align: "center",
                  flex: 0.12,
                },
              ]}
            />
          </div>
        </Container>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const dbHost = process.env.DB_HOST;
  const res = await axios.get(`http://localhost:3000/api/cars`);
  const fleet = res.data.Items;
  return {
    props: {
      fleet,
    },
  };
}
