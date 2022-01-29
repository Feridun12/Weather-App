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

// import React from "react";
// import PropTypes from "prop-types";
// function ForecastDetails(props) {
//   const forecast = props;
//   return (
//     <div className="forecast-details" data-testid="forecast-details">
//       <div className="forecast-details__temperature">
//         {forecast.temperature.min}
//         &deg;C
//       </div>
//       <div className="forecast__wind-speed"> {forecast.wind.speed}</div>
//       <div className="forecast__wind-direction">{forecast.wind.direction}</div>
//       <div className="forecast__humidity"> {forecast.humidity}</div>
//     </div>
//   );
// }
// ForecastDetails.propTypes = {
//   forecast: PropTypes.shape({
//     temperature: PropTypes.shape({
//       min: PropTypes.number,
//       max: PropTypes.number,
//     }).isRequired,
//     humidity: PropTypes.number.isRequired,
//     wind: PropTypes.shape({
//       speed: PropTypes.number,
//       direction: PropTypes.string,
//     }).isRequired,
//   }).isRequired,
// };
// export default ForecastDetails;
