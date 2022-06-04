import * as React from "react";
import Account from "./account/";
import { Toolbar, Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Header() {
    return (
        <Toolbar sx={{ flexFlow: "row-reverse" }}>
            <Account />
            <Box
                sx={{
                    backgroundColor: "#4d5f6b",
                    mr: 3,
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onClick={() => {
                    window.open("https://t.me/softdrink1991", "_blank");
                }}
            >
                <TelegramIcon fontSize="medium" />
            </Box>
        </Toolbar>
    );
}
