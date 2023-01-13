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
import { useSession } from "next-auth/react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

function Liste({
  fleet,
  setHitmarker,
  hitmarker,
  setReservation,
  setCarReservation,
  setStatus,
}) {
  const { data: session } = useSession();

  function takeReservation(car) {
    setReservation(true);
    setStatus(false);
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
                height: { sm: "27vh", md: "25vh" },
                width: "90%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "#EAEDED",
                border:
                  car.id === hitmarker
                    ? "5px solid #d4d4b5"
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
                  overflow: { md: "hidden" },
                  overflowY: { md: "auto" },

                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <Stack
                  sx={{
                    paddingBottom: {
                      sm: "5px",
                      md: "15px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: {
                        xs: "1em",
                        lg: "1.5em",
                      },
                      marginBottom: {
                        xs: "10px",
                        lg: "20px",
                      },
                    }}
                  >
                    <strong>
                      {car.brand} {car.model}
                    </strong>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    gap: "10px",
                  }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1em",
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
                      {car.passengers}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1em",
                      }}
                    >
                      <MeetingRoomIcon
                        sx={{
                          fontSize: {
                            xs: "small",
                            sm: "medium",
                          },
                        }}
                      />
                      {car.doors}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1em",
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
                        fontSize: "1em",
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
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    gap: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: {
                        xs: "1em",
                        sm: "1.5em",
                      },
                    }}
                  >
                    <strong> {car.priceperday} euros/jour </strong>
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      width: {
                        xs: "35vw",
                        md: "15vw",
                        lg: "10vw",
                      },
                    }}
                    onClick={() => takeReservation(car)}
                  >
                    <Typography>Reserver</Typography>
                  </Button>
                </Stack>
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
              height: { sm: "27vh", md: "25vh" },
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#EAEDED",
              border:
                car.id === hitmarker
                  ? "5px solid #d4d4b5"
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
                overflow: { md: "hidden" },
                overflowY: { md: "auto" },

                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              <Stack
                sx={{
                  paddingBottom: {
                    sm: "5px",
                    md: "15px",
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: "1em",
                      lg: "1.5em",
                    },
                    marginBottom: {
                      xs: "10px",
                      lg: "20px",
                    },
                  }}
                >
                  <strong>
                    {car.brand} {car.model}
                  </strong>
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  gap: "10px",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "1em",
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
                    {car.passengers}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "1em",
                    }}
                  >
                    <MeetingRoomIcon
                      sx={{
                        fontSize: {
                          xs: "small",
                          sm: "medium",
                        },
                      }}
                    />
                    {car.doors}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "1em",
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
                      fontSize: "1em",
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
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  gap: "5px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: {
                      xs: "1em",
                      sm: "1.5em",
                    },
                  }}
                >
                  <strong> {car.priceperday} euros/jour </strong>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}

export default Liste;
