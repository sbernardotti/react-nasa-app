import moment from "moment";

const EARTH_DATE_KEY = "app.nasa.earthdate";
const SOL_DATE_KEY = "app.nasa.soldate";

export function readEarthDate() {
  return localStorage.getItem(EARTH_DATE_KEY) || moment().format("YYYY-MM-DD");
}

export function readSolDate() {
  return localStorage.getItem(SOL_DATE_KEY) || "1";
}

export function writeEarthDate(date) {
  localStorage.setItem(EARTH_DATE_KEY, date);
}

export function writeSolDate(date) {
  localStorage.setItem(SOL_DATE_KEY, date);
}
