import { useState } from "react";
import "./CityInput.css";

export default function CityInput({ updateWeather }) {
  const [cityTerm, setCityTerm] = useState("");

  return (
    <div className="City-Input--Container">
      <input
        className="City-Input"
        type="text"
        placeholder="Wyszukaj miasto"
        value={cityTerm}
        onChange={(e) => {
          setCityTerm(e.target.value);
        }}
        onSubmit={() => updateWeather(cityTerm)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCityTerm(e.target.value);
            updateWeather(cityTerm);
          }
        }}
      />
      <button
        className="City-Input--Button"
        onClick={() => updateWeather(cityTerm)}
      >
        Szukaj
      </button>
    </div>
  );
}
