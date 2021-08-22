import { Helmet } from "react-helmet";
import LoadMoreButton from "../components/LoadMoreButton";
import PhotoGallery from "../components/PhotoGallery";
import Searchbar from "../components/Searchbar";
import TitleInfo from "../components/TitleInfo";
import { usePhotos } from "../hooks/usePhotos";

function Home() {
  const { loading, photos, rover, camera, date, getNextPhotos } = usePhotos();

  return (
    <>
      <Helmet>
        <title>ReactNasaApp</title>
      </Helmet>
      <TitleInfo rover={rover} />
      <Searchbar
        initialRover={rover}
        initialCamera={camera}
        initialDate={date}
      />
      <h1 className="title is-1">Today photos</h1>
      <PhotoGallery photos={photos} loading={loading} />
      <LoadMoreButton
        photos={photos}
        getNextPhotos={getNextPhotos}
        loading={loading}
      />
    </>
  );
}

export default Home;
