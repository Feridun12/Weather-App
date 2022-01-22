import React from "react";
import propTypes from "prop-types";

function Forecastsummary(props) {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_icon">{icon}</div>
      <div className="forecast-summary_tempature">{temperature}</div>
    </div>
  );
}

Forecastsummary.propTypes = {
  date: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  temperature: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number,
  }).isRequired,
};

export default Forecastsummary;
