import React, { useState } from "react";
import axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
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

export default function Booking({ booking, cars }) {
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  const title = "Réservations";

  return (
    <>
      <Head>
        <title> Réservations | WILDCARS </title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <Dashboard title={title} />
        <Container style={{ marginTop: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Réservations
          </Typography>

          <div
            style={{ height: "90vh", width: "100%", backgroundColor: "#fff" }}
          >
            <DataGrid
              onCellClick={(e) => console.log(e)}
              rows={booking}
              getRowId={(row) => row.pk}
              loading={!booking}
              components={{
                Toolbar: CustomToolbar,
              }}
              // editMode="row"
              checkboxSelection={checkboxSelection}
              experimentalFeatures={{ newEditingApi: true }}
              columns={[
                { field: "pk", headerName: "ID", editable: true, flex: 0.1 },
                {
                  field: "model",
                  headerName: "Véhicule",
                  editable: true,
                  flex: 0.25,
                  valueGetter: (e) =>
                    axios
                      .get(`http://localhost:3000/api/cars/${e.row.car_id}`)
                      .then((res) => console.log(res.data.Item.model))
                      .then((model) => model),
                },
                {
                  type: "date",
                  field: "debut",
                  headerName: "Date de début",
                  editable: true,
                  flex: 0.25,
                  valueGetter: ({ value }) => value && new Date(value),
                },
                {
                  type: "date",
                  field: "fin",
                  headerName: "Date de fin",
                  editable: true,
                  flex: 0.2,
                  valueGetter: ({ value }) => value && new Date(value),
                },
                {
                  field: "amount",
                  headerName: "Montant",
                  editable: true,
                  flex: 0.2,
                  valueFormatter: ({ value }) =>
                    currencyFormatter.format(value),
                },
                {
                  type: "boolean",
                  defaultValue: 1,
                  field: "isAvailable",
                  headerName: "Dispo",
                  editable: true,
                  flex: 0.13,
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
  const res = await axios.get(`http://localhost:3000/api/booking`);
  const booking = res.data.Items;
  return {
    props: {
      booking,
    },
  };
}
