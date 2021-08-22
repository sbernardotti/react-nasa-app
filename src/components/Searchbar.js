/* eslint-disable no-unused-vars */
import { useState } from "react";
import getDateType from "../helpers/getDateType";
import { useLocation } from "wouter";
import { CAMERAS_OPTIONS, ROVERS_OPTIONS } from "../helpers/searchOptions";
import {
  readEarthDate,
  readSolDate,
  writeEarthDate,
  writeSolDate,
} from "../service/localstorage.service";

function Searchbar({ initialRover, initialCamera, initialDate }) {
  const [rover, setRover] = useState(initialRover);
  const [camera, setCamera] = useState(initialCamera);
  const [date, setDate] = useState(initialDate);
  const [dateType, setDateType] = useState(getDateType(initialDate));

  const [_, pushLocation] = useLocation();

  const handleChangeRover = (evt) => {
    setRover(evt.target.value);
  };

  const handleChangeCamera = (evt) => {
    setCamera(evt.target.value);
  };

  const handleDateChange = (evt) => {
    setDate(evt.target.value);

    if (dateType === "earth") {
      writeEarthDate(evt.target.value);
    } else {
      writeSolDate(evt.target.value);
    }
  };

  const handleChangeDateType = (evt) => {
    setDateType(evt.target.value);

    setTimeout(() => {
      if (evt.target.value === "earth") {
        setDate(readEarthDate());
      } else {
        setDate(readSolDate());
      }
    }, 200);
  };

  const handleSearch = () => {
    pushLocation(`/search/${rover}/${camera}/${date}`);
  };

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-narrow">
          <div className="field">
            <label className="label">Rover</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={handleChangeRover}
                  value={rover}
                  data-testid="rover-select"
                >
                  {ROVERS_OPTIONS.map((roverOption, index) => (
                    <option key={index}>{roverOption}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="field">
            <label className="label">Camera</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={handleChangeCamera}
                  value={camera}
                  data-testid="camera-select"
                >
                  {CAMERAS_OPTIONS.map((cameraOption, index) => (
                    <option key={index}>{cameraOption}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="field">
            <label className="label">Date</label>
            <div className="field has-addons">
              <p className="control">
                <span className="select">
                  <select onChange={handleChangeDateType}>
                    <option value="earth">Earth date</option>
                    <option value="sol">Sol date</option>
                  </select>
                </span>
              </p>
              <p className="control">
                <input
                  className="input"
                  type={dateType === "earth" ? "date" : "number"}
                  value={date}
                  onChange={handleDateChange}
                  min="0"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="column is-align-left">
          <div className="field">
            <label className="label">&nbsp;</label>
            <div className="control">
              <button
                className="button is-link"
                onClick={handleSearch}
                data-testid="search-button"
              >
                Search Photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
