import { useState } from "react";
import "./CityInput.css";

export default function CityInput({ updateWeather, weather }) {
  const [cityTerm, setCityTerm] = useState("");

  const handleSearch = () => {
    updateWeather(cityTerm);
    setCityTerm("");
  };

  return (
    <div className="City-Input--Container">
      <input
        className={weather.location ? "City-Input" : "City-Input SearchError"}
        type="text"
        placeholder="Wyszukaj miasto"
        value={cityTerm}
        onChange={(e) => setCityTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className="City-Input--Button" onClick={handleSearch}>
        Szukaj
      </button>
    </div>
  );
}
