import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import Link from "next/link";

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
        <Tabs value={value} onChange={handleChange}>
          <Link href="users">
            <Tab label="Login" />
          </Link>
          <Link href="/admin">
            <Tab label="Compte Pro" />
          </Link>
        </Tabs>
      </Box>
    </Stack>
  );
}

export default Header;
