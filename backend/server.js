const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const trailer_url = "https://www.youtube.com/embed/";

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server is up and running on port ${port}...`);
});

app.get("/search-trailer", async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: "snippet",
        maxResults: 1,
        q: query + " trailer",
        videoEmbeddable: true,
        type: "video",
        key: GOOGLE_API_KEY,
      },
    });
    const videoId = response.data.items[0].id.videoId;
    if (!videoId) {
      return res.status(400).json({ error: "no video found" });
    }
    res.json({ trailer: trailer_url + videoId });
  } catch (error) {
    const status = error.status;
    if (status === 403) {
      console.error("403: daily quota reached");
      return res.status(403).json({ error: "daily quota reached" });
    }
    res.status(500).json({ error: "unable to fetch video" });
    console.log(error.status);
  }
});
