import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { Container, Typography, Box, Button } from "@mui/material";

import Dashboard from "../../components/admin/nav/Dashboard";
import Head from "next/head";
import dayjs from "dayjs";
import CustomToolbar from "../../components/admin/dashboard/CustomToolbar";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [checkboxSelection, setCheckboxSelection] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/users`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => console.error(error));
    }, []);
    const title = "Utilisateurs";

    const handleIsAdmin = (e) => {
        if (e.field === "isAdmin" && e.row.isAdmin === 0) {
            axios.put(`/api/users/${e.row.id}`, { isAdmin: 1 });
            updateData();
        }
        if (e.field === "isAdmin" && e.row.isAdmin === 1) {
            axios.put(`/api/users/${e.row.id}`, { isAdmin: 0 });
            updateData();
        }
    };

    const updateData = async () => {
        const updatedData = await axios.get(`/api/users`);
        console.log(updatedData.data);
        setUsers(updateData.data);
    };

    return (
        <>
            <Head>
                <title> Utilisateurs | Wildcars </title>
            </Head>
            <Box sx={{ display: "flex" }}>
                <Dashboard title={title} />

                <Container style={{ marginTop: "2rem" }}>
                    <Typography variant="h4" gutterBottom>
                        Utilisateurs
                    </Typography>

                    <div
                        style={{
                            height: "90vh",
                            width: "100%",
                            backgroundColor: "#fff",
                        }}
                    >
                        {users && (
                            <DataGrid
                                rows={users}
                                loading={!users}
                                onCellClick={(e) => handleIsAdmin(e)}
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                                // editMode="row"
                                checkboxSelection={checkboxSelection}
                                experimentalFeatures={{ newEditingApi: true }}
                                columns={[
                                    {
                                        field: "id",
                                        headerName: "ID",
                                        editable: true,
                                        flex: 0.1,
                                    },
                                    {
                                        field: "name",
                                        headerName: "Nom",
                                        editable: true,
                                        flex: 1,
                                    },

                                    {
                                        field: "email",
                                        headerName: "Email",
                                        editable: true,
                                        flex: 1.5,
                                    },
                                    {
                                        type: "boolean",
                                        field: "isAdmin",
                                        headerName: "Admin",
                                        editable: true,
                                        flex: 0.6,
                                    },
                                ]}
                            />
                        )}
                    </div>
                </Container>
            </Box>
        </>
    );
}

// {
//   "id": {
//     "S": ""
//   },
//   "brand": {
//     "S": ""
//   },
//   "model": {
//     "S": ""
//   },
//   "category": {
//     "S": ""
//   },
//   "licensePlate": {
//     "S": ""
//   },
//   "image": {
//     "S": ""
//   },
//   "priceperday": {
//     "S": ""
//   },
//   "passengers": {
//     "S": ""
//   },
//   "doors": {
//     "S": ""
//   },
//   "km": {
//     "N": ""
//   },
//   "consumption": {
//     "S": ""
//   },
//   "transmission": {
//     "S": ""
//   },
//   "location": {
//     "L": []
//   }
// }
