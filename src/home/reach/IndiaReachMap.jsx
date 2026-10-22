import { INDIA_VIEWBOX, CITIES, STATES } from "./indiaMapData";
import useMapSequence, { MapPin } from "./mapSequence";
import "./reachMaps.css";

// Seconds between one pin and the next.
const STEP = 0.32;
const LOOP = 14;
const STATE_FILL = "#e1edf8";

// A state lights up when the first pin lands in it.
const STATE_TURN = {};
CITIES.forEach((city, i) => {
  if (!(city.state in STATE_TURN)) STATE_TURN[city.state] = i;
});

export default function IndiaReachMap() {
  const ref = useMapSequence({ step: STEP, loop: LOOP });

  return (
    <svg
      ref={ref}
      className="reach-map reach-map-india"
      viewBox={INDIA_VIEWBOX}
      role="img"
      aria-label={`Map of India with pins on ${CITIES.length} cities where Zuvius products are available`}
    >
      <g>
        {STATES.map((state) => {
          const turn = STATE_TURN[state.id];
          return turn === undefined ? (
            <path key={state.id} d={state.d} className="reach-state" />
          ) : (
            <path
              key={state.id}
              d={state.d}
              className="reach-state is-served"
              data-seq={turn}
              data-kind="fill"
              data-base={STATE_FILL}
            />
          );
        })}
      </g>

      <g>
        {CITIES.map((city, i) => (
          <MapPin key={city.name} x={city.x} y={city.y} seq={i} size={1.05} label={city.name} />
        ))}
      </g>
    </svg>
  );
}
