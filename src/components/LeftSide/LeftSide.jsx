import "./LeftSide.css";
import AirForecast from "../AirForecast/AirForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import ActualForecast from "../ActualForecast/ActualForecast";
import CityInput from "../CityInput/CityInput";
export default function LeftSide({ updateWeather, weather }) {
  return (
    <section className="LeftSide">
      <CityInput updateWeather={updateWeather} />
      <ActualForecast weather={weather} />
      <HourlyForecast weather={weather} />
      <AirForecast weather={weather} />
    </section>
  );
}
