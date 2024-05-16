import React from 'react'
import { Box, Typography, ImageList, Button, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function SideBar({data}) {
  return (
    <>
        <Box sx={{
            p:"20px 20px 0 2px"
        }}>
            <Typography sx={{
                color: 'white',
                fontSize: "20px",
                fontWeight: "bold"
            }}>
                About
            </Typography>
            <Typography sx={{
                color: "white"
            }}>
                {data.about}
            </Typography>
            <Box sx={{
                backgroundColor: "#444444",
                width: "405px",
                mt: "20px",
                pl: "20px",
                borderRadius: "10px"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <ImageList sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "5px"
                    }}>
                        <img src={data.image_url} alt={data.title} style={{ width: '75px', height: '70px', objectFit: 'cover' }} />
                    </ImageList>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "75%",
                        pl: "10px",
                        justifyContent: "space-between",
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>
                            <Typography sx={{
                                color: "white",
                                fontWeight: "bold"
                            }}>
                                {data.title}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                mt: "10px",
                                gap: "10px"
                            }}>
                                <Typography sx={{
                                    p: "2px 4px",
                                    color: "#3e3e3e",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    backgroundColor: 'gray'
                                }}>
                                    TRAILER
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "gray"
                                }}>
                                    1 min 17 sec
                                </Typography>
                            </Box>
                        </Box>
                        <MoreHorizIcon sx={{
                            color: "gray",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}>

                        </MoreHorizIcon>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#444444",
                borderRadius: "20px",
                width: "50px",
                mt: "15px",
                p: "5px 0 5px 20px",
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    color: "white"
                }}>
                    {data.rating}
                </Typography>
                <StarBorderIcon sx={{
                    pt: "3px",
                    pl: "5px",
                    color: "white",
                    fontSize: "large"
                }}></StarBorderIcon>
            </Box>
        </Box>
    </>
  )
}
