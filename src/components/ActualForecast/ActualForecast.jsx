import "./ActualForecast.css";
import translateCode from "../../translateCode";
import blank from "../../images/blank.svg";

export default function ActualForecast({ weather }) {
  const location = weather.location;
  const current = weather.current;

  return (
    <div className="Forecast--Panel Actual-Forecast">
      <div className="Actual-Forecast--Left">
        <div>
          <h1>
            {location
              ? `${location.name}, ${location.country}`
              : "Brak informacji"}
          </h1>
          <span>
            {location
              ? "Opady deszczu: " + current.precip_mm + " mm"
              : "Brak informacji"}
          </span>
        </div>
        <div className="Temperature">
          {location ? Math.round(current.temp_c) + "°" : "Brak informacji"}
        </div>
      </div>
      <div className="Actual-Forecast--Right">
        <img
          src={location ? translateCode(current) : blank}
          alt="Ikona aktualnej pogody"
          draggable="false"
        />
      </div>
    </div>
  );
}
