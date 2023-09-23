import "./HourlyForecast.css";
import ForecastHour from "../ForecastHour/ForecastHour";

export default function HourlyForecast({ weather }) {
  return (
    <div className="Forecast--Panel filled">
      <h5>DZISIEJSZA POGODA</h5>
      <div className="Forecast--Panel--Content">
        <ForecastHour hour="6" weather={weather} />
        <ForecastHour hour="9" weather={weather} />
        <ForecastHour hour="12" weather={weather} />
        <ForecastHour hour="15" weather={weather} />
        <ForecastHour hour="18" weather={weather} />
        <ForecastHour hour="21" weather={weather} />
      </div>
    </div>
  );
}
