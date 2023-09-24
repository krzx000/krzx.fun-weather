import "./AirCondition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AirCondition({ icon, name, value, unit }) {
  return (
    <div className="Forecast--Air-Condition--Container--Item">
      <FontAwesomeIcon icon={icon} color="#959BA3" size="lg" />

      <div className="Forecast--Air-Condition--Container--Item--Label">
        <div className="Forecast--Air-Condition--Container--Item--Label--Name">
          {name}
        </div>
        <div className="Forecast--Air-Condition--Container--Item--Value">
          {value !== "?" ? Math.round(value) + " " + unit : "?"}
        </div>
      </div>
    </div>
  );
}
