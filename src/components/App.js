import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

App.propTypes = {
  location: propTypes.shape({
    city: propTypes.string,
    country: propTypes.string,
  }).isRequired,
};

export default App;
