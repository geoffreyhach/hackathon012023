import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../public/assets/logowc.png";
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
            <Stack
                direction="row"
                alignItems="center"
                gap={2}
                sx={{
                    fontSize: "5em",
                    fontFamily: "Roboto Mono",
                    fontWeight: "100",
                    color: "lightgrey",
                }}
            >
                <Image src={logo} width="4px" height="4px" />
                WILDCARS
            </Stack>
            <Box sx={{ display: "flex", gap: "5px" }}>
                <Login />
            </Box>
        </Stack>
    );
}

export default Header;
