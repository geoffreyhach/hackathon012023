import { Stack, Typography, CardMedia, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";

function Reservation({ hitmarker, setReservation, status, setStatus }) {
    const [carReserved, setCarReserved] = useState();
    const [dateDeparture, setDateDeparture] = useState(dayjs());
    const [dateEnd, setDateEnd] = useState(dayjs());
    const [total, setTotal] = useState();

    const { data: session } = useSession();

    const handleDateDeparture = (e) => {
        setDateDeparture(e);
    };

    const dd = dayjs(dateDeparture);
    const de = dayjs(dateEnd);

    let hours = de.diff(dd, "hours");
    const days = Math.round(hours / 24);
    hours = hours - days * 24;

    const handleDatedateEnd = (e) => {
        setDateEnd(e);
    };

    const takeReservation = () => {
        const order = {
            debut: dateDeparture,
            fin: dateEnd,
            car_id: hitmarker,
            users_id: session.user.id,
            amount: total,
        };
        axios.post(`http://localhost:3000/api/booking `, order).then((res) => {
            if (res.status === 200) {
                console.log("Reservation pris en compte");
                setStatus(true);
            }
        });
    };

    const endpoint = process.env.DB_HOST;
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/cars/${hitmarker}`)
            .then((res) => setCarReserved(res.data.Item))
            .catch((error) => console.error(error));
    }, [hitmarker]);

    useEffect(() => {
        let x = 0;
        if (carReserved) x = ` ${carReserved.priceperday}`;
        let y = days;
        setTotal(x * y);
    }, [dateDeparture, dateEnd]);

    if (carReserved) {
        return (
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    border: "1px solid #EAEDED",
                    borderRadius: "5px",
                    width: "95vw",
                    height: "85vh",
                    overflow: "hidden",
                    overflowY: "auto",
                    backgroundColor: "#EAEDED",
                }}
            >
                <Stack
                    sx={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            height: "auto",
                            width: "50%",
                        }}
                        image={carReserved.image}
                    />
                    <Typography>{carReserved.brand}</Typography>
                    <Typography>{carReserved.model}</Typography>
                    <Typography>{carReserved.category}</Typography>
                    <Typography>{carReserved.doors}</Typography>
                    <Typography>{carReserved.consumption}</Typography>
                </Stack>
                <Stack
                    sx={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Stack>
                        <Typography>
                            {carReserved.priceperday} Euros / jour
                        </Typography>

                        <Typography>{total} Euros / jour</Typography>
                    </Stack>
                    <Stack>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        variant="standard"
                                        fullWidth
                                    />
                                )}
                                label="Date de depart"
                                ampm={false}
                                value={dateDeparture}
                                onChange={(e) => handleDateDeparture(e)}
                                minDate={dayjs()}
                            />
                        </LocalizationProvider>
                    </Stack>
                    <Stack>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        variant="standard"
                                        fullWidth
                                    />
                                )}
                                label="Date de fin"
                                ampm={false}
                                value={dateEnd}
                                onChange={(e) => handleDatedateEnd(e)}
                                minDate={dayjs()}
                            />
                        </LocalizationProvider>
                    </Stack>
                    <Stack>
                        {!status ? (
                            <Button
                                variant="outlined"
                                sx={{
                                    width: {
                                        xs: "35vw",
                                        md: "15vw",
                                        lg: "10vw",
                                    },
                                }}
                                onClick={takeReservation}
                            >
                                <Typography>Reserver</Typography>
                            </Button>
                        ) : (
                            <Typography>
                                Votre reservation à été pris en compte{" "}
                            </Typography>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        );
    }
}

export default Reservation;
