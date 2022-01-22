import { render } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders learn react link", () => {
  const screen = render(<App location={forecast.location} />);
  const linkElement = screen.getByText("Manchester, UK");
  expect(linkElement).toBeInTheDocument();
});
