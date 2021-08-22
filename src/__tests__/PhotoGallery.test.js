import { render, screen } from "@testing-library/react";
import PhotoGallery from "../components/PhotoGallery";

const mockPhoto = {
  id: 1111,
  sol: 3213,
  camera: {
    id: 20,
    name: "FHAZ",
    rover_id: 5,
    full_name: "Front Hazard Avoidance Camera",
  },
  img_src:
    "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03213/opgs/edr/fcam/FLB_682722406EDR_F0902630FHAZ00341M_.JPG",
  earth_date: "2021-08-20",
  rover: {
    id: 5,
    name: "Curiosity",
    landing_date: "2012-08-06",
    launch_date: "2011-11-26",
    status: "active",
  },
};

test("PhotoGallery render photos", () => {
  render(<PhotoGallery photos={[mockPhoto]} />);
  const photoTitleElement = screen.getByText(/#1111/i);
  expect(photoTitleElement).toBeInTheDocument();
});

test("PhotoGallery render 'No results found.'", () => {
  render(<PhotoGallery photos={[]} />);
  const noResultsFoundElement = screen.getByText(/No results found./i);
  expect(noResultsFoundElement).toBeInTheDocument();
});
