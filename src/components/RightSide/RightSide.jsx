import "./RightSide.css";
import FutureForecast from "../FutureForecast/FutureForecast";

export default function RightSide({ weather }) {
  return (
    <section className="RightSide">
      <div className="Forecast--Panel filled">
        <h5>PROGNOZA NA 7 DNI</h5>
        <div className="Forecast--Panel--Content">
          <FutureForecast weather={weather} index={0} />
          <FutureForecast weather={weather} index={1} />
          <FutureForecast weather={weather} index={2} />
          <FutureForecast weather={weather} index={3} />
          <FutureForecast weather={weather} index={4} />
          <FutureForecast weather={weather} index={5} />
          <FutureForecast weather={weather} index={6} />
        </div>
      </div>
    </section>
  );
}
