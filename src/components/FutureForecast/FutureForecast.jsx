import translateCode from "../../translateCode";
import "./FutureForecast.css";

export default function FutureForecast({ weather, index }) {
  let dayString = "";
  const dayNumber = weather.location
    ? new Date(weather.forecast.forecastday[index].date).getDate()
    : new Date().getDate();

  if (dayNumber === new Date().getDate() - 1) dayString = "Wczoraj";
  if (dayNumber === new Date().getDate()) dayString = "Dzisiaj";
  if (dayNumber === new Date().getDate() + 1) dayString = "Jutro";
  if (dayNumber > new Date().getDate() + 1)
    dayString = (
      weather.location
        ? new Date(weather.forecast.forecastday[index].date)
        : new Date()
    ).toLocaleDateString("pl", {
      weekday: "long",
    });

  return (
    <div className="FutureForecast">
      <div className="FutureForecast--Day">{dayString}</div>
      <div className="FutureForecast--Status">
        {weather.location ? (
          <img
            className="FutureForecast--Status--Icon"
            src={translateCode(weather.forecast.forecastday[index].day)}
            alt="Ikona prognozy pogody"
            draggable="false"
          />
        ) : null}

        <div className="FutureForecast--Status--Status">
          {weather.location
            ? weather.forecast.forecastday[index].day.condition.text
            : "Brak informacji"}
        </div>
      </div>
      <div className="FutureForecast--Temperature">
        <div className="FutureForecast--Temperature--Day">
          {Math.round(
            weather.location
              ? weather.forecast.forecastday[index].day.maxtemp_c
              : "Brak informacji"
          )}
        </div>
        <div className="FutureForecast--Temperature--Separator">/</div>
        <div className="FutureForecast--Temperature--Night">
          {Math.round(
            weather.location
              ? weather.forecast.forecastday[index].day.mintemp_c
              : "Brak informacji"
          )}
        </div>
      </div>
    </div>
  );
}
