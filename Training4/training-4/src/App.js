import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";
import SearchInput from "./components/SearchInput";

function App() {
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    console.log("render");
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function(response) {
        setListCountry(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = useCallback(countryName => {
    function getAllCountry() {
      console.log("render");
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(function(response) {
          setListCountry(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    if (countryName.text.length > 0) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName.text}`)
        .then(function(response) {
          setListCountry(response.data);
        })
        .catch(function(error) {
          console.log("cannot find country", error);
        });
    } else {
      getAllCountry();
    }
  }, []);

  return (
    <div className="App">
      <SearchInput onSubmit={handleSubmit} />

      <Country listCountry={listCountry} />
    </div>
  );
}

export default App;
