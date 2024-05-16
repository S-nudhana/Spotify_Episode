import {useEffect, useState} from 'react'
import PodcastTitle from "../components/PodcastTitle"
import PodcastMain from "../components/PodcastMain"
import SideBar from '../components/Sidebar';
import axios from "axios";
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Podcast() {
  const podcastId = useParams();
  const paramsId = Number(podcastId.podcastShowId);
  const randomId = Math.floor(Math.random() * 10) + 1;
  let id = randomId;
  if(paramsId){
    id = paramsId;
  }
  const [podcastData, setPodcastData] = useState();
  const [episodeData, setEpisodeData] = useState();
  const getPodcastData = async () => {
      const PodcastData = await axios.get(`http://localhost:3000/podcastshow?podcastId=${id}`);
      setPodcastData(PodcastData.data.data);
  };
  const getEpisodeData = async () => {
    const EpisodeData = await axios.get(`http://localhost:3000/podcastepisode?podcastId=${id}`);
    setEpisodeData(EpisodeData.data.data);
  }
  useEffect(() => {
      getPodcastData();
      getEpisodeData();
  }, []);
  return (
    <>
        {podcastData && <PodcastTitle data={podcastData} />}
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          height: "70vh",
          background: 'rgb(119, 119, 119)',
          backgroundImage: 'linear-gradient(180deg, rgba(119,119,119,1) 0%, rgba(87,87,87,1) 8%, rgba(62,62,62,1) 18%, rgba(32,32,32,1) 40%, rgba(0,0,0,1) 100%)',
          gap: "20px"
        }}>
          {episodeData && podcastData && <PodcastMain data={episodeData} author={podcastData} />}
          {podcastData && <SideBar data={podcastData}/>}
        </Box>
    </>
  )
}
