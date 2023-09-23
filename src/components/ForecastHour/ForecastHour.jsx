import "./ForecastHour.css";
import translateCode from "../../translateCode";
export default function ForecastHour({ hour, weather }) {
  return (
    <div className="ForecastHour">
      <div className="ForecastHour--Hour">{hour + ":00"}</div>
      <div className="ForecastHour--Icon">
        {weather.location ? (
          <img
            src={translateCode(weather.forecast.forecastday[0].hour[hour])}
            alt="Aktualna pogoda jako obrazek"
            draggable="false"
          />
        ) : null}
      </div>
      <div className="ForecastHour--Temperature">
        {weather.location
          ? Math.round(weather.forecast.forecastday[0].hour[hour].temp_c) + "°"
          : "Brak informacji"}
      </div>
    </div>
  );
}
