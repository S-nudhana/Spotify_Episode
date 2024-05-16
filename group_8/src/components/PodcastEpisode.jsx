import React, { useEffect, useState } from "react";
import { Typography, ImageList, IconButton, Button, Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function PodcastEpisode() {
  const episodeId = useParams();
  const id = Number(episodeId.podcastEpisodeId);
  const [data, setData] = useState();
  const getEpisode = async () => {
    const PodcastData = await axios.get(`http://s662csc105v008.sit.kmutt.ac.th:3000/one?podcastId=${id}`);
    const episodeData = PodcastData.data.data[0];
    setData(PodcastData.data.data[0]);
    if (episodeData && episodeData.show_id) {
      await getId(episodeData.show_id);
    }
  };
  const [podcastAuthor, setPodcastAuthor] = useState();
  const [Id, setId] = useState();
  const getId = async (showId) => {
      const PodcastAuthor = await axios.get(`http://s662csc105v008.sit.kmutt.ac.th:3000/podcastshow?podcastId=${showId}`);
      setPodcastAuthor(PodcastAuthor.data.data.author);
      setId(PodcastAuthor.data.data.id)
  };
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
  useEffect(() => {
    getEpisode();
  }, [id]);

  return (
    data != undefined && (
      <>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,52,12,1) 100%)",
            p: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            pt: "30px",
            pl: "50px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "row",
              pb: "20px",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={data.image_url}
              alt={data.title}
              style={{ width: "250px", height: "250px", borderRadius: "10px",objectFit: "cover" }}
            />
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              pl: "20px",
            }}>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "15px",
                }}
              >
                Podcast Episode
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                {podcastAuthor}
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          ></Typography>
          <Typography
            sx={{
              color: "gray",
              pt: "20px"
            }}
          >
            {convertDate(data.date.substring(0, 10))} • {convertTime(data.length)}
          </Typography>
          <Typography
            sx={{
              pt: "10px",
              color: "gray",
            }}
          ></Typography>
          <Box
            sx={{
              display: "flex",
              pt: "10px",
            }}
          ></Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "16px",
            }}
          ></Typography>
          <Typography
            sx={{
              pl: "7px",
              mt: "-5px",
              color: "black",
            }}
          ></Typography>
          <Typography
            sx={{
              color: "black",
              pl: "7px",
            }}
          ></Typography>
          <Button
            sx={{
              height: "60px",
              width: "auto",
              background: "#00FF00",
              color: "#00FF00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "none",
            }}
          >
            <img
              src="https://icons.veryicon.com/png/o/internet--web/web-video-clip/play-332.png"
              alt="Play icon"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
              }}
            />
          </Button>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Episode Description <br />
          </Typography>
          <Typography
              sx={{
                color: "gray",
                width: "75%"
              }}
            >
              <br /> {data.description}<span style={{color: "white"}}> ...Show more</span>
            </Typography>
          <Link to={`/show/${Id}`}>
            <Button
              sx={{
                justifyContent: "center",
                border: "1px solid white",
                borderRadius: "20px",
                mt: "30px",
                width: "140px",
                backgroundColor: "transparent",
                textTransform: "none"
              }}
            >
              <Typography
                sx={{
                  alignContent: "center",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                See All Episode
              </Typography>
            </Button>
          </Link>
          <IconButton
            sx={{
              backgroundColor: "transparent",
            }}
          ></IconButton>
        </Box>
      </>
    )
  );
}
