import { render, screen } from "@testing-library/react";
import TitleInfo from "../components/TitleInfo";

global.window = { location: { pathname: null } };

test("TitleInfo renders Rover name", () => {
  render(<TitleInfo rover="TestRover" />);
  const titleElement = screen.getByText(/TestRover/i);
  expect(titleElement).toBeInTheDocument();
});
