import "./ActualForecast.css";
import translateCode from "../../translateCode";
export default function ActualForecast({ weather }) {
  return (
    <div className="Forecast--Panel Actual-Forecast">
      <div className="Actual-Forecast--Left">
        <div>
          <h1>
            {weather.location ? weather.location.name : "Brak informacji"}
          </h1>
          <span>
            {weather.location
              ? "Opady deszczu: " + weather.current.precip_mm + " mm"
              : "Brak informacji"}
          </span>
        </div>
        <div className="Temperature">
          {weather.location
            ? Math.round(weather.current.temp_c) + "°"
            : "Brak informacji"}
        </div>
      </div>
      <div className="Actual-Forecast--Right">
        {weather.location ? (
          <img
            src={translateCode(weather.current)}
            alt="Ikona aktualnej pogody"
            draggable="false"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
