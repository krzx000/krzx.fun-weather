import FutureForecast from "../FutureForecast/FutureForecast";
import "./RightSide.css";

export default function RightSide({ weather }) {
  return (
    <section className="RightSide">
      <div className="Forecast--Panel filled">
        <h5>PROGNOZA NA 7 DNI</h5>
        <div className="Forecast--Panel--Content">
          {Array.from({ length: 7 }, (_, index) => (
            <FutureForecast key={index} weather={weather} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
