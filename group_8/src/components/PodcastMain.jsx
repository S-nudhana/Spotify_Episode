import React, { useLayoutEffect } from 'react'
import { Box, Typography, ImageList, Button, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Link, useParams } from "react-router-dom";

export default function PodcastMain({data,author}) {
    const convertTime = (timeInMilliseconds) => {
        const totalSeconds = Math.floor(timeInMilliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (hours == 0) {
            return `${minutes} min ${seconds} sec`;
        } else {
            return `${hours} hrs ${minutes} min`;
        }
    };
    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        return `${month} ${year}`;
    };

    return (<>
        <Box sx={{
            pl: "20px",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                pt: "20px",
                pl: "10px"
            }}>
                <Button sx={{
                    border: "1px solid white",
                    borderRadius: "20px",
                    width: "100px",
                    backgroundColor: "transparent",
                }}>
                    <Typography sx={{
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                    }}>
                        Follow
                    </Typography>
                </Button>
                <IconButton sx={{
                    backgroundColor: "transparent"
                }}>
                    <MoreHorizIcon sx={{
                        color: "gray"
                    }}>
                    </MoreHorizIcon>
                </IconButton>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                pt: "20px",
                pl: "10px"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Typography sx={{
                        color: 'white',
                        fontSize: "20px",
                        fontWeight: "bold",
                        pt: "10px",
                        pb: "20px",
                    }}>
                        All Episodes
                    </Typography>

                    {/* map */}
                    {data.map((item) => {
                        return (
                            <Link to={`/episode/${item.id}`} style={{ textDecoration: 'none' }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "1000px",
                                    gap: "20px",
                                    pb: "20px"
                                }}>
                                    <Box sx={{
                                        height: "2px",
                                        width:"1000px",
                                        backgroundColor: "gray",
                                        position: "absolute",
                                    }}>
                                    </Box>
                                    <ImageList sx={{
                                        minWidth: "150px",
                                        maxWidth: "150px",
                                        height: "150px",
                                        boxShadow: "2",
                                        borderRadius: "10px"
                                    }}>
                                        <img src={item.image_url} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    </ImageList>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        pt: "20px"
                                    }}>
                                        <Typography sx={{
                                            color: "white",
                                            fontSize: "16px",
                                            fontWeight: "bold"
                                        }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{
                                            color: "gray",
                                            pt: "10px"
                                        }}>
                                            {author.author}
                                        </Typography>
                                        <Typography sx={{
                                            pt: "10px",
                                            color: "gray"
                                        }}>
                                            {item.description}
                                        </Typography>
                                        <Typography sx={{
                                            color: "white",
                                            fontSize: "16px",
                                            pt: "10px"
                                        }}>
                                            {convertDate((item.date).substring(0, 10))} • {convertTime(item.length)}
                                        </Typography>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            width: "800px",
                                            pt: "10px",
                                            justifyContent: "space-between"
                                        }}>
                                            <AddCircleOutlineIcon sx={{
                                                color: "gray",
                                            }}></AddCircleOutlineIcon>
                                            <PlayCircleIcon sx={{
                                                color: "white",
                                            }}></PlayCircleIcon>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    </>)
}
