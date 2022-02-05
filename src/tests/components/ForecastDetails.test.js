import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 10,
      direction: "s",
    },
    humidity: 30,
  };
  it("it renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText(/30/g)).toHaveClass("forecast-details_humidity");
    expect(getByText(/22/g)).toHaveClass("forecast-details__temperature-max");
    expect(getByText(/10/g)).toHaveClass("forecast-details_wind-speed");
    expect(getByText(/12/g)).toHaveClass("forecast-details__temperature-min");
    expect(getByText("s")).toHaveClass("forecast-details_wind-direction");
  });
});
