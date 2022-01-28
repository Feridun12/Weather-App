import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { forecast } = props;
  const { temperature, wind, humidity } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__temperature">
        {temperature.max}
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details_wind">
        {wind.speed}
        {wind.direction}
      </div>
      <div className="forecast-details_humidity">
        {humidity}
        {}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
