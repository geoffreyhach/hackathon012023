import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Login from "./Login";

function Header() {
    return (
        <Stack
            sx={{
                width: "90%",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Stack sx={{ fontSize: "5em" }}>WILDCARS</Stack>
            <Box sx={{ display: "flex", gap: "5px" }}>
                <Login />
            </Box>
        </Stack>
    );
}

export default Header;
