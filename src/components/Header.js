import * as React from "react";
import Account from "./account/";
import Toolbar from "@mui/material/Toolbar";
export default function Header() {
    return (
        <Toolbar sx={{ flexFlow: "row-reverse" }}>
            <Account />
        </Toolbar>
    );
}
