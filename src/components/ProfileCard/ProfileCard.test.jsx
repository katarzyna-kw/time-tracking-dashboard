import { render, screen } from "@testing-library/react";
import ProfileCard from "./index";
test("renders Profile Card section", () => {
  render(<ProfileCard />);
  const pcElement = screen.getByTestId("profilecard");
  expect(pcElement).toBeInTheDocument();
});

test("renders correct name and img", () => {
  render(<ProfileCard />);
  const name = screen.getByText("Jeremy Robson");
  const img = screen.getByAltText("profile avatar");
  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
