import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Stack,
    Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import EuroIcon from "@mui/icons-material/Euro";
import { useSession } from "next-auth/react";

function Liste({
    fleet,
    setHitmarker,
    hitmarker,
    setReservation,
    setCarReservation,
}) {
    const { data: session } = useSession();

    function takeReservation(car) {
        setCarReservation(car.id);
        setReservation(true);
    }

    function MarkerClick(car) {
        setHitmarker(car.id);
    }
    if (session) {
        return (
            <Stack
                sx={{
                    overflow: { md: "hidden" },
                    overflowY: { md: "auto" },

                    marginTop: "25px",
                    marginBottom: "25px",
                }}
                style={{ scrollbarWidth: "none" }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                    }}
                >
                    {fleet.map((car, index) => (
                        <Card
                            key={index}
                            sx={{
                                height: "20vh",
                                width: "90%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                                backgroundColor: "#EAEDED",

                                border:
                                    car.id === hitmarker
                                        ? "3px solid #d4d4b5"
                                        : "1px solid #d4d4b5",
                            }}
                            onClick={() => MarkerClick(car)}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    height: "auto",
                                    width: "50%",
                                }}
                                image={car.image}
                            />
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    width: {
                                        xs: "40vw",
                                        sm: "40vw",
                                        md: "18vw",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        fontSize: "1em",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <strong>{car.name}</strong>
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.8em",
                                    }}
                                >
                                    <PeopleIcon
                                        sx={{
                                            fontSize: {
                                                xs: "small",
                                                sm: "medium",
                                            },
                                        }}
                                    />
                                    {car.nbpassengers}
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.8em",
                                    }}
                                >
                                    <AlignVerticalCenterIcon
                                        sx={{
                                            fontSize: {
                                                xs: "small",
                                                sm: "medium",
                                            },
                                        }}
                                    />
                                    {car.transmission}
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.8em",
                                    }}
                                >
                                    <AvTimerIcon
                                        sx={{
                                            fontSize: {
                                                xs: "small",
                                                sm: "medium",
                                            },
                                        }}
                                    />
                                    {car.consumption}L/100km
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontSize: "0.8em",
                                    }}
                                >
                                    <EuroIcon
                                        sx={{
                                            fontSize: {
                                                xs: "small",
                                                sm: "medium",
                                            },
                                        }}
                                    />
                                    {car.priceperday} euros/jour
                                </Typography>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        width: "7vw",
                                    }}
                                    onClick={() => takeReservation(car)}
                                >
                                    <Typography>Reserver</Typography>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Stack>
        );
    }
    return (
        <Stack
            sx={{
                overflow: { md: "hidden" },
                overflowY: { md: "auto" },
                marginTop: "25px",
                marginBottom: "25px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "10px",
                }}
            >
                {fleet.map((car, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: "20vh",
                            width: "90%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            border:
                                car.id === hitmarker ? "5px solid black" : null,
                        }}
                        onClick={() => MarkerClick(car)}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                height: "auto",
                                width: "50%",
                            }}
                            image={car.image}
                        />
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "center",
                                justifyContent: "center",
                                width: { xs: "40vw", sm: "40vw", md: "18vw" },
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1em",
                                    marginBottom: "10px",
                                }}
                            >
                                <strong>{car.name}</strong>
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontSize: "0.8em",
                                }}
                            >
                                <PeopleIcon
                                    sx={{
                                        fontSize: { xs: "small", sm: "medium" },
                                    }}
                                />
                                {car.nbpassengers}
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontSize: "0.8em",
                                }}
                            >
                                <AlignVerticalCenterIcon
                                    sx={{
                                        fontSize: { xs: "small", sm: "medium" },
                                    }}
                                />
                                {car.transmission}
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontSize: "0.8em",
                                }}
                            >
                                <AvTimerIcon
                                    sx={{
                                        fontSize: { xs: "small", sm: "medium" },
                                    }}
                                />
                                {car.consumption}L/100km
                            </Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontSize: "0.8em",
                                }}
                            >
                                <EuroIcon
                                    sx={{
                                        fontSize: { xs: "small", sm: "medium" },
                                    }}
                                />
                                {car.priceperday} euros/jour
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Stack>
    );
}

export default Liste;
