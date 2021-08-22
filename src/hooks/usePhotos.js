import { useContext, useEffect, useState } from "react";
import moment from "moment";
import PhotosContext from "../context/photos.context";
import getDateType from "../helpers/getDateType";
import { photosByEarthDate, photosBySolDate } from "../service/nasa.service";

export function usePhotos(
  { rover, camera, date } = {
    rover: "Curiosity",
    camera: "ALL",
    date: moment().format("YYYY-MM-DD"),
  }
) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { photos, setPhotos } = useContext(PhotosContext);

  const getNextPhotos = () => {
    const dateType = getDateType(date);

    setPage(page + 1);
    setLoading(true);

    if (dateType === "earth") {
      photosByEarthDate(rover, camera, date, page + 1).then((data) => {
        setPhotos([...photos, ...data.photos]);
        setLoading(false);
      });
    } else {
      photosBySolDate(rover, camera, date, page + 1).then((data) => {
        setPhotos([...photos, ...data.photos]);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    const dateType = getDateType(date);

    setLoading(true);

    if (dateType === "earth") {
      photosByEarthDate(rover, camera, date).then((data) => {
        setPhotos([...data.photos]);
        setLoading(false);
      });
    } else {
      photosBySolDate(rover, camera, date).then((data) => {
        setPhotos([...data.photos]);
        setLoading(false);
      });
    }
  }, [rover, camera, date, setPhotos]);

  return { loading, photos, rover, camera, date, page, getNextPhotos };
}
