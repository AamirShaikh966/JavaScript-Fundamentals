"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryName = document.querySelector(".country__name");
const countryRegion = document.querySelector(".country__region");
const countryPopulation = document.querySelector(".population");
const countryLanguage = document.querySelector(".language");
const countryCurrency = document.querySelector(".currency");
const countryImg = document.querySelector(".country__img");
///////////////////////////////////////

const renderCountry = (data, className = "") => {
  // Displaying the country details

  // console.log(data);

  countryName.innerHTML = `${data.name}`;
  countryRegion.innerHTML = `${data.region}`;
  countryPopulation.innerHTML = `👫 ${(+data.population / 1000000).toFixed(
    1
  )}M`;
  countryLanguage.innerHTML = `🗣️ ${data.languages[0].name}`;
  countryCurrency.innerHTML = `💰 ${data.currencies[0].name}`;
  countryImg.src = `${data.flags.svg}`;

  countriesContainer.style.opacity = 1;
};

// Calling the API using fetch
const getCountryData = (country) => {
  // Country-1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // Country-2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
};
getCountryData("portugal");

// const getCountryAndNeighbour = (country) => {
//   // AJAX call country-1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`); //Get country details by country name using API
//   request.send();

//   request.addEventListener("load", (e) => {
//     const [data] = JSON.parse(e.target.responseText);
//     console.log(data);

//     // Render country-1
//     renderCountry(data);

//     // Get neighbour country-2
//     // const neighbour = data[0].borders?.[0];

//     // OR //

//     // const [neighbour] = data.borders;
//     // if (!neighbour) return;

//     // AJAX call country-2
//     // const request2 = new XMLHttpRequest();
//     // request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`); //Get country details by country code using API
//     // request2.send();

//     // request2.addEventListener("load", (e2) => {
//     //   const data2 = JSON.parse(e2.target.responseText);

//     // Render country-2
//     // renderCountry(data2, "neighbour");
//     // });
//   });
// };

// getCountryAndNeighbour("Saudi Arabia");
