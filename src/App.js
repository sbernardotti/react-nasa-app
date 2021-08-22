import "bulma/css/bulma.min.css";
import { Route, Switch } from "wouter";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
import { PhotosContextProvider } from "./context/photos.context";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container p-3">
        <PhotosContextProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/search/:rover/:camera/:date" component={Results} />
          </Switch>
        </PhotosContextProvider>
      </div>
    </div>
  );
}

export default App;
