import "./CountryScroller.css";

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
  return (
    <div className="country-scroll">
      <div className="country-track">
        {[...countries, ...countries].map((country, index) => (
          <div className="country-item" key={index}>
            <img
              src={`/Country Logo/${country}.png`}
              alt={country}
            />
            <span>{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}