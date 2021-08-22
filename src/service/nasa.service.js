import axios from "axios";
import config from "../config";

const API_KEY = config.NASA_API_KEY;
const MARS_ROVER_PHOTOS_ENDPOINT = `https://api.nasa.gov/mars-photos/api/v1/rovers/`;

export async function photosByEarthDate(
  rover = "Curiosity",
  camera = "ALL",
  date = "2021-8-18",
  page = 1
) {
  const fetchUrl =
    MARS_ROVER_PHOTOS_ENDPOINT +
    `${rover}/photos?${
      camera !== "ALL" ? "camera=" + camera + "&" : ""
    }earth_date=${date}&page=${page}&api_key=${API_KEY}`;

  const res = await axios.get(fetchUrl);

  return res.data;
}

export async function photosBySolDate(
  rover = "Curiosity",
  camera = "ALL",
  date = 1000,
  page = 1
) {
  const fetchUrl =
    MARS_ROVER_PHOTOS_ENDPOINT +
    `${rover}/photos?${
      camera !== "ALL" ? "camera=" + camera + "&" : ""
    }sol=${date}&page=${page}&api_key=${API_KEY}`;

  const res = await axios.get(fetchUrl);

  return res.data;
}

export async function getMissionManifest(rover = "Curiosity") {}
