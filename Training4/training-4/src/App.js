import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";
import SearchInput from "./components/SearchInput";

function App() {
  const [listCountry, setListCountry] = useState([]);

  if (listCountry.length > 0) window.test = listCountry;

  useEffect(() => {
    getAllCountry();
  }, []);

  function getAllCountry() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function(response) {
        setListCountry(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function handleSubmit(countryName) {
    if (countryName.text.length > 0) {
      console.log(countryName.text);
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
  }

  return (
    <div className="App">
      <SearchInput onSubmit={handleSubmit} />

      <Country listCountry={listCountry} />
    </div>
  );
}

export default App;
