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
                height: { sm: "10vh", xs: "column" },
                display: "flex",
                flexDirection: { sm: "row", xs: "column" },
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={3}
                sx={{
                    fontSize: "5em",
                    fontFamily: "Roboto Mono",
                    fontWeight: "100",
                    color: "lightgrey",
                }}
            >
                <Image src={logo} width={50} height={50} alt="logo" />
                WILDCARS
            </Stack>
            <Box sx={{ display: "flex", gap: "5px" }}>
                <Login />
            </Box>
        </Stack>
    );
}

export default Header;
