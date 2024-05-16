const express = require("express");
const podcastShow = require("../controller/podcastShow");
const getEpisode = require("../controller/getEpisode");
const oneEpisode = require("../controller/oneEpisode");
const showPodcast = express.Router();

showPodcast.get("/podcastshow", podcastShow);
showPodcast.get("/podcastepisode", getEpisode);
showPodcast.get("/one" , oneEpisode);

module.exports = showPodcast;