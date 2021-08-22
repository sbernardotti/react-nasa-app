function TitleInfo({ rover }) {
  return (
    <div className="mb-4">
      <h1 className="title is-1">Gallery</h1>
      <h3 data-testid="subtitle" className="subtitle is-3">
        Rover <strong>{rover}</strong>
      </h3>
    </div>
  );
}

export default TitleInfo;
