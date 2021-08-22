import { Helmet } from "react-helmet";
import LoadMoreButton from "../components/LoadMoreButton";
import PhotoGallery from "../components/PhotoGallery";
import Searchbar from "../components/Searchbar";
import TitleInfo from "../components/TitleInfo";
import { usePhotos } from "../hooks/usePhotos";

function Results({ params }) {
  const { rover, camera, date } = params;
  const { loading, photos, getNextPhotos } = usePhotos({ rover, camera, date });

  return (
    <>
      <Helmet>
        <title>ReactNasaApp - Rover {rover}</title>
      </Helmet>
      <TitleInfo rover={rover} />
      <Searchbar
        initialRover={rover}
        initialCamera={camera}
        initialDate={date}
      />
      <PhotoGallery photos={photos} loading={loading} />
      <LoadMoreButton
        photos={photos}
        getNextPhotos={getNextPhotos}
        loading={loading}
      />
    </>
  );
}

export default Results;
