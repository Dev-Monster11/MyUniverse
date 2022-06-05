import * as React from "react";
import Account from "./account/";
import { Toolbar, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Header() {
    return (
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://t.me/softdrink1991", "_blank");
                    }}
                >
                    <TelegramIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://www.youtube.com/channel/UC3S8CfvoXVrc_Hlb3OWe4MQ", "_blank");
                    }}
                >
                    <YouTubeIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://github.com/myuniversevr/myuniversevr", "_blank");
                    }}
                >
                    <GitHubIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://www.instagram.com/myuniversemeta/", "_blank");
                    }}
                >
                    <InstagramIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://twitter.com/myuniversemeta", "_blank");
                    }}
                >
                    <TwitterIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://www.reddit.com/r/myuniversetoken/comments/tyezma/my_universe_token/", "_blank");
                    }}
                >
                    <RedditIcon fontSize="medium" />
                </Box>
                {/* <Box
                    className="links"
                    onClick={() => {
                        window.open("https://t.me/softdrink1991", "_blank");
                    }}
                >
                    <TelegramIcon fontSize="medium" />
                </Box> */}
                <Account />
            </Box>
            <Box component="img" src={logo} sx={{ display: { sm: "block", xs: "none" } }} alt="logo" />
        </Toolbar>
    );
}
