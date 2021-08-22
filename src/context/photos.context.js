import React, { useState } from "react";

const Context = React.createContext({});

export function PhotosContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  return (
    <Context.Provider value={{ photos, setPhotos }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
