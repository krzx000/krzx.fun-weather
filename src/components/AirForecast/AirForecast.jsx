import AirCondition from "../AirCondition/AirCondition";

import {
  faDroplet,
  faSun,
  faTemperatureHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
export default function AirForecast({ weather }) {
  return (
    <div className="Forecast--Panel filled">
      <h5>STAN POWIETRZA</h5>
      <div className="Forecast--Panel--Content">
        <div className="Forecast--Air-Condition--Container">
          <AirCondition
            icon={faTemperatureHalf}
            name="Temperatura odczuwalna"
            value={weather.location ? weather.current.feelslike_c : "?"}
            unit={"°"}
          />
          <AirCondition
            icon={faDroplet}
            name="Opady deszczu"
            value={weather.location ? weather.current.precip_mm : "?"}
            unit="mm"
          />
        </div>
        <div className="Forecast--Air-Condition--Container">
          <AirCondition
            icon={faWind}
            name="Prędkość wiatu"
            value={weather.location ? weather.current.wind_kph : "?"}
            unit={"km/h"}
          />
          <AirCondition
            icon={faSun}
            name="Indeks UV"
            value={weather.location ? weather.current.uv : "?"}
            unit=""
          />
        </div>
      </div>
    </div>
  );
}
