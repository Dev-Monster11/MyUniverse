import * as React from "react";
import Account from "./account/";
import { Toolbar, Box } from "@mui/material";
import logo from "../assets/images/logo.png";

export default function Header() {
    return (
        <Toolbar sx={{ justifyContent: "space-between", flexDirection: "row-reverse", backgroundColor: "#0c151e" }}>
            <Account />
            <Box component="img" src={logo} sx={{ display: { sm: "block", xs: "none" } }} alt="logo" />
        </Toolbar>
    );
}
