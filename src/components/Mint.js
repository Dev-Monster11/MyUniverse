import { useEffect, useMemo, useRef, useState } from "react";

import { GetContract } from "../helpers/Contract";
import abi from "../helpers/contract.json";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import logo from "../assets/images/logo.png";
import inc from "../assets/images/Vector2.png";
import dic from "../assets/images/Vector.png";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import { Box, Card, CardContent, Typography, IconButton, Button } from "@mui/material";

const Mint = () => {
    const { account, library } = useWeb3React();
    const [count, setCount] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [price, setPrice] = useState(0.06);
    const [limit, setLimit] = useState(3);
    const [minted, setMinted] = useState(0);
    const decNum = () => {
        if (count > 1) setCount(count - 1);
    };
    const incNum = () => {
        if (count < limit) setCount(count + 1);
    };
    let contract;
    try {
        contract = GetContract("0x29e95b69011875f2f096b4e89a163885b793309d", abi);
    } catch (error) {
        contract = null;
    }
    const mint = async () => {
        if (contract) {
            setDisabled(true);
            console.log(ethers.utils.parseUnits((0.06 * count).toString(), 18));
            let buffer = await contract._Mint(count, {
                value: ethers.utils.parseUnits((0.06 * count).toString(), 18),
                from: account,
            });
            await buffer.wait();
            Store.addNotification({
                title: "Mint",
                message: "Successfully Minted",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true,
                },
            });
            setDisabled(false);
        } else {
            Store.addNotification({
                title: "Warning",
                message: "Connect Wallet first!",
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true,
                },
            });
        }
    };

    useEffect(() => {
        if (contract) {
            contract.totalSupply().then((val) => {
                setMinted(val);
            });
        }
    }, [contract]);
    useEffect(() => {}, [disabled]);
    return (
        <>
            <ReactNotifications />
            <Box sx={{ height: "calc(100vh - 200px)", m: "auto", display: "flex", justifyContent: "center" }}>
                <Card
                    sx={{
                        width: { sm: "500px", xs: "300px" },
                        height: { sm: "400px", xs: "300px" },
                        my: "auto",
                        backgroundColor: "#020307ba",
                        color: "white",
                        p: 5,
                    }}
                >
                    <CardContent sx={{ textAlign: "center" }}>
                        <img src={logo} style={{ width: "100%" }} alt="logo" />
                        <Typography variant="h5" component="div" sx={{ my: 2 }}>
                            {minted} / 7983 Minted
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                            PRESALE MAX <b>= 3</b>
                        </Typography>
                        <Box>
                            <IconButton
                                component="span"
                                onClick={() => {
                                    decNum();
                                }}
                            >
                                <img src={dic} />
                            </IconButton>
                            <input
                                type="text"
                                value={"0" + count}
                                readOnly
                                style={{
                                    fontSize: "30px",
                                    width: "35px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    background: "transparent",
                                    border: "solid thin white",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    color: "white",
                                }}
                            />
                            <IconButton
                                component="span"
                                onClick={() => {
                                    incNum();
                                }}
                            >
                                <img src={inc} />
                            </IconButton>
                        </Box>
                        <Button
                            onClick={() => {
                                mint();
                            }}
                            disabled={disabled}
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 5,
                                backgroundColor: "white",
                                color: "#22272d",
                                fontWeight: "bold",
                                "&:hover": { backgroundColor: "#4d5f6b", color: "white" },
                            }}
                        >
                            MINT NOW
                        </Button>
                    </CardContent>
                </Card>
            </Box>
            {/* <footer className="nft_footer">
                <div className="text-center">
                    <div className={"termsFeed"}>
                        <p className="">
                            TermsFeed © 2021- 2022 <span> | Aeropups </span>{" "}
                        </p>
                        <div style={{ flex: 1 }}></div>
                        <div className="d-flex justify-content-center icons">
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.linkedin.com/in/josh-wade-6b59a975/"}>
                                    <img className={"nav-item-img"} src={linkedin} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.youtube.com/channel/UCKRPijo2TGC3u56nuGHpv3g"}>
                                    <img className={"nav-item-img"} src={Youtube} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.instagram.com/wark.art/"}>
                                    <img className={"nav-item-img"} src={insta} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://twitter.com/AeroPupsForever"}>
                                    <img className={"nav-item-img"} src={Twitter} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://discord.gg/bKsEdQr4AS"}>
                                    <img className={"nav-item-img"} src={openSea} alt={"social"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    );
};
export default Mint;
