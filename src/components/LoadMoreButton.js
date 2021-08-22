import shouldRender from "../helpers/shouldRender";

function LoadMoreButton({ photos, getNextPhotos, loading }) {
  return shouldRender(photos) ? (
    <button
      className={`button is-link is-fullwidth ${loading ? "is-loading" : ""}`}
      onClick={getNextPhotos}
    >
      Load more photos
    </button>
  ) : (
    <div></div>
  );
}

export default LoadMoreButton;
