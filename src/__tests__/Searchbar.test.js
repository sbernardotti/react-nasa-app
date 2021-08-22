import { render, screen } from "@testing-library/react";
import Searchbar from "../components/Searchbar";

global.window = { location: { pathname: null } };

test("Searchbar works", () => {
  const initialRover = "Curiosity";
  const initialCamera = "ALL";
  const initialDate = "1";

  render(
    <Searchbar
      initialRover={initialRover}
      initialCamera={initialCamera}
      initialDate={initialDate}
    />
  );

  const searchButton = screen.getByTestId("search-button");

  searchButton.click();

  expect(global.window.location.pathname).toEqual(
    `/search/${initialRover}/${initialCamera}/${initialDate}`
  );
});
