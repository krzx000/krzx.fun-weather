import "./ForecastHour.css";
import translateCode from "../../translateCode";
import blank from "../../images/blank.svg";
export default function ForecastHour({ hour, weather }) {
  return (
    <div className="ForecastHour">
      <div className="ForecastHour--Hour">{hour + ":00"}</div>
      <div className="ForecastHour--Icon">
        <img
          src={
            weather.location
              ? translateCode(weather.forecast.forecastday[0].hour[hour])
              : blank
          }
          alt="Aktualna pogoda jako obrazek"
          draggable="false"
        />
      </div>
      <div className="ForecastHour--Temperature">
        {weather.location
          ? Math.round(weather.forecast.forecastday[0].hour[hour].temp_c) + "°"
          : "?"}
      </div>
    </div>
  );
}
