import { render, screen } from "@testing-library/react";
import TrackingCards from "./index";
test("renders tracking cards section", () => {
  render(<TrackingCards />);
  const cardsElement = screen.getByTestId("cards");
  expect(cardsElement).toBeInTheDocument();
});
