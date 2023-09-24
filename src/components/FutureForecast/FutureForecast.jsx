import translateCode from "../../translateCode";
import "./FutureForecast.css";
import blank from "../../images/blank.svg";

const getDayString = (weather, index) => {
  const dayNumber = weather.location
    ? new Date(weather.forecast.forecastday[index].date).getDate()
    : new Date().getDate();
  const today = new Date().getDate();

  if (dayNumber === today - 1) return "Wczoraj";
  if (dayNumber === today) return "Dzisiaj";
  if (dayNumber === today + 1) return "Jutro";
  if (dayNumber > today + 1)
    return (
      weather.location
        ? new Date(weather.forecast.forecastday[index].date)
        : new Date()
    ).toLocaleDateString("pl", {
      weekday: "long",
    });

  return "";
};

export default function FutureForecast({ weather, index }) {
  let dayString = getDayString(weather, index);
  dayString =
    dayString.charAt(0).toLocaleUpperCase() +
    dayString.substring(1, dayString.length);

  return (
    <div className="FutureForecast">
      <div className="FutureForecast--Day">{dayString}</div>
      <div className="FutureForecast--Status">
        <img
          className="FutureForecast--Status--Icon"
          src={
            weather.location
              ? translateCode(weather.forecast.forecastday[index].day)
              : blank
          }
          alt="Ikona prognozy pogody"
          draggable="false"
        />

        <div className="FutureForecast--Status--Status">
          {weather.location
            ? weather.forecast.forecastday[index].day.condition.text
            : "?"}
        </div>
      </div>
      <div className="FutureForecast--Temperature">
        <div className="FutureForecast--Temperature--Day">
          {weather.location
            ? Math.round(weather.forecast.forecastday[index].day.maxtemp_c)
            : "?"}
        </div>
        <div className="FutureForecast--Temperature--Separator">/</div>
        <div className="FutureForecast--Temperature--Night">
          {weather.location
            ? Math.round(weather.forecast.forecastday[index].day.mintemp_c)
            : "?"}
        </div>
      </div>
    </div>
  );
}
