import "./CountryScroller.css";
import { useState } from "react";

const countries = [
  "Angola",
  "Argentina",
  "Benin",
  "Bolivia",
  "Botswana",
  "Brazil",
  "BurkinaFaso",
  "Chile",
  "Colombia",
  "Congo",
  "Costa Rica",
  "Cuba",
  "Dominican",
  "Egypt",
  "El Salvador",
  "Ethiopia",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Ivory Coast",
  "Jordan",
  "Lebanon",
  "Madagascar",
  "Malawi",
  "Mall",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Nicaragua",
  "Nigeria",
  "Pakistan",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Senegal",
  "Tanzania",
  "Turkmenistan",
  "Uganda",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
];

export default function CountryScroller() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className="country-scroll">
      <div className="country-track">
        {[...countries, ...countries].map((country, index) => (
          <div
            className="country-item-wrapper"
            key={index}
            onMouseEnter={() => setHoveredCountry(country)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            {hoveredCountry === country && (
              <div className="country-tooltip">{country}</div>
            )}
            <div className="country-item">
              <img
                src={`/Country Logo/${country}.png`}
                alt={country}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}