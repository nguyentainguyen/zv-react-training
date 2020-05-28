import React from "react";
import PropTypes from "prop-types";

Country.propTypes = {
  country: PropTypes.array
};

Country.defaultProps = {
  listCountry: []
};

function Country({ listCountry }) {
  return (
    <div className="country">
      {listCountry.map(country => (
        <div className="country-name" key={country.numericCode}>
          <p>{country.name}</p>
          <img src={country.flag} alt={country.population} width="5%" />
          <hr width="50%" text-align="center" />
        </div>
      ))}
    </div>
  );
}

export default Country;
