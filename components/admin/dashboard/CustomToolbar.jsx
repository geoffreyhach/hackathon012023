import React from "react";
import { Button } from "@mui/material";
import { GridToolbarExport } from "@mui/x-data-grid";
import CachedIcon from "@mui/icons-material/Cached";

function CustomToolbar(props) {
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

export default CustomToolbar;
