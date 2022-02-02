import { render } from "@testing-library/react";
import React from "react";
import App from "../components/App";
// import forecast from "../data/forecast.json";

// xtest("renders learn react link", () => {
//   const screen = render(
//     <App location={forecast.location} forecasts={forecast.forecasts} />
//   );
//   const linkElement = screen.getByText("Manchester, UK");
//   expect(linkElement).toBeInTheDocument();
// });
test("it renders correctly", () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});
