import { useEffect, useState } from "react";
import { WORLD_VIEWBOX, BASE_LAND, BORDERS, INDIA, COUNTRIES } from "./worldMapData";
import useMapSequence, { MapPin } from "./mapSequence";
import "./reachMaps.css";

// Seconds between one country and the next.
const STEP = 0.2;
const LOOP = 16;
const LAND_FILL = "#dde9f5";

// On phones, zoom in on the area that holds every country (Mexico to the Philippines).
const PHONE_VIEWBOX = "150 70 700 345";
const PHONE_QUERY = "(max-width: 600px)";

function useIsPhone() {
  const [isPhone, setIsPhone] = useState(
    () => typeof window !== "undefined" && window.matchMedia(PHONE_QUERY).matches
  );
  useEffect(() => {
    const query = window.matchMedia(PHONE_QUERY);
    const update = () => setIsPhone(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return isPhone;
}

export default function WorldReachMap() {
  const ref = useMapSequence({ step: STEP, loop: LOOP });
  const isPhone = useIsPhone();

  return (
    <svg
      ref={ref}
      className="reach-map reach-map-world"
      viewBox={isPhone ? PHONE_VIEWBOX : WORLD_VIEWBOX}
      role="img"
      aria-label={`World map with pins on the ${COUNTRIES.length} countries where Zuvius products are available`}
    >
      <path className="reach-land" d={BASE_LAND} />

      <g>
        {COUNTRIES.filter((c) => c.d).map((country) => (
          <path
            key={country.name}
            d={country.d}
            className="reach-land is-served"
            data-seq={COUNTRIES.indexOf(country)}
            data-kind="fill"
            data-base={LAND_FILL}
          />
        ))}
      </g>

      <path className="reach-borders" d={BORDERS} />
      <path className="reach-india" d={INDIA} />

      <g>
        {COUNTRIES.map((country, i) => (
          <MapPin
            key={country.name}
            x={country.x}
            y={country.y}
            seq={i}
            size={isPhone ? 0.62 : 0.72}
            label={country.name}
          />
        ))}
      </g>
    </svg>
  );
}
