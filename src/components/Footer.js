import * as React from "react";
import { Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaDiscord, FaMediumM } from "react-icons/fa";
import cmc from "../assets/images/cmc.png";

export default function Footer() {
    return (
        <Box component="footer">
            <Box sx={{ display: "flex" }}>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://t.me/softdrink1991", "_blank");
                    }}
                >
                    <FaDiscord size="1.5rem" />
                </Box>
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
                        window.open("https://www.reddit.com/r/myuniversetoken/comments/tyezma/my_universe_token/", "_blank");
                    }}
                >
                    <RedditIcon fontSize="medium" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://t.me/softdrink1991", "_blank");
                    }}
                >
                    <FaMediumM size="1.5rem" />
                </Box>
                <Box
                    className="links"
                    onClick={() => {
                        window.open("https://coinmarketcap.com/currencies/my-universe/ico/", "_blank");
                    }}
                >
                    <Box component="img" src={cmc} alt="cmc" sx={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
                </Box>
            </Box>
        </Box>
    );
}
