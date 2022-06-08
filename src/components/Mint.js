import { useEffect, useMemo, useRef, useState } from "react";

import { GetContract } from "../helpers/Contract";
import abi from "../helpers/contract.json";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import logo from "../assets/images/logo.png";
import random from "../assets/images/1.jpg";
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
    const getMintedValue = () => {
        if (contract) {
            contract.totalSupply().then((val) => {
                setMinted(ethers.utils.formatUnits(val, 0).toString());
            });
        }
    };
    let contract;
    try {
        contract = GetContract("0x29e95b69011875f2f096b4e89a163885b793309d", abi);
    } catch (error) {
        contract = null;
    }
    getMintedValue();
    const mint = async () => {
        if (contract) {
            setDisabled(true);
            let buffer = await contract
                ._Mint(count, {
                    value: ethers.utils.parseUnits((0.06 * count).toString(), 18),
                    from: account,
                })
                .catch(() => {
                    setDisabled(false);
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
            setDisabled(false);
        }
    };
    useEffect(() => {}, [disabled]);
    return (
        <>
            <ReactNotifications />
            <Box sx={{ height: "calc(100vh - 200px)", m: "auto", display: "flex", justifyContent: "center", p: "24px" }}>
                <Card
                    sx={{
                        width: { sm: "500px", xs: "300px" },
                        height: { sm: "570px", xs: "500px" },
                        my: "auto",
                        backgroundColor: "#020307ba",
                        color: "white",
                        p: 2,
                    }}
                >
                    <CardContent sx={{ textAlign: "center" }}>
                        <Box component="img" src={logo} sx={{ width: "100%", display: { sm: "none", xs: "block" } }} alt="logo" />
                        <Typography variant="h5" sx={{ m: { xs: "5px" } }}>
                            {minted} / 7983 Minted
                        </Typography>
                        <Typography sx={{ fontSize: { sm: "2rem", xs: "1rem" }, mb: { xs: 1 } }}>
                            PRESALE MAX <b>= 3</b>
                        </Typography>
                        <Box component="img" sx={{ width: { sm: "70%", xs: "85%" } }} src={random} alt="Random Image" />
                        <Box sx={{ mt: 2 }}>
                            <IconButton
                                component="span"
                                onClick={() => {
                                    decNum();
                                }}
                            >
                                <img src={dic} />
                            </IconButton>
                            <Box
                                component="input"
                                type="text"
                                value={"0" + count}
                                readOnly
                                sx={{
                                    fontSize: { sm: "30px", xs: "20px" },
                                    width: { sm: "35px", xs: "25px" },
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
                                mt: { sm: 3, xs: 2 },
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
        </>
    );
};
export default Mint;
