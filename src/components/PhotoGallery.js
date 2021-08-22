import { LazyLoadImage } from "react-lazy-load-image-component";

function PhotoGallery({ photos, loading }) {
  return photos.length ? (
    <div className="columns is-multiline">
      {photos.map((photo, index) => (
        <div className="column is-one-fifth" key={index}>
          <div className="box">
            <h4 className="title is-4">#{photo.id}</h4>
            <h6 className="subtitle is-6">
              {photo.earth_date} (Sol {photo.sol})
            </h6>
            <figure className="image is-square">
              <LazyLoadImage
                alt={photo.id}
                src={photo.img_src}
                visibleByDefault={true}
                effect="opacity"
              />
            </figure>
          </div>
        </div>
      ))}
    </div>
  ) : loading ? (
    <button className="button is-loading is-large is-fullwidth is-white">
      Loading
    </button>
  ) : (
    <p>No results found.</p>
  );
}

export default PhotoGallery;
