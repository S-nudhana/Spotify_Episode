import { Box, Typography, ImageList, IconButton } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as React from "react";

export default function PodcastTitle({data}) {
    return (
        <>  
            <Box sx={{
                pl: "30px",
                backgroundColor: "#6f6f6f",
            }}>
                <Box sx={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "row",
                    pt: "40px",
                }}>
                    <IconButton sx={{
                        color: "white",
                        height: "30px",
                        width: "30px",
                        border: "2px solid transparent",
                        borderRadius: "100%",
                        backgroundColor: "#303030"
                    }}>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton sx={{
                        color: "white",
                        height: "30px",
                        width: "30px",
                        border: "2px solid transparent",
                        borderRadius: "100%",
                        backgroundColor: "#303030"
                    }}>
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'end',
                    pt: "30px",
                    gap: "20px"
                }}>
                    <ImageList sx={{
                        width: "170px",
                        height: "170px",
                        boxShadow: "3",
                        border: "1px solid transparent",
                        borderRadius: "10px"
                    }}>
                        <img src={data.image_url} alt={data.title} style={{ width: '170px', height: '170px', objectFit: 'cover' }} />
                    </ImageList>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        pb: "12px",
                    }}>
                        <Typography sx={{
                            color: "white",
                            fontSize: "15px",
                        }}>
                            Podcast
                        </Typography>
                        <Typography sx={{
                            color: "white",
                            fontSize: "60px",
                            fontWeight: "bold"
                        }}>
                            {data.title}
                        </Typography>
                        <Typography sx={{
                            color: "white",
                            fontSize: "20px",
                        }}>
                            {data.author}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
