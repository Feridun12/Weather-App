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
    humidity: "low",
  };
  it("it renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        wind={validProps.wind}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
  xit("render correct values for props", () => {
    const { getByText } = render(
      <ForecastDetails
        wind={validProps.wind}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
      />
    );
    expect(getByText("30")).toHaveClass("forecast__humidity");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
