import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/componentStyles/ForecastDetails.css";

function ForecastDetails(props) {
  const { forecast } = props;
  const { temperature, wind, humidity, date } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}{" "}
      </div>
      <div className="forecast-details__temperature">
        <div className="forecast-details__temperature">
          {`Max temp: ${temperature.max}`}&deg;C
        </div>
        <span className="forecast-details__temperature-min">
          {` Min temp: ${temperature.min}`}
          &deg;C
        </span>
      </div>
      <div className="forecast-details_wind-speed">{`Wind speed: ${wind.speed}mph`}</div>
      <span className="forecast-details_wind-direction">{`Wind direction: ${wind.direction}`}</span>

      <div className="forecast-details_humidity">
        {`Humidity: ${humidity}%`}
        {}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
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
