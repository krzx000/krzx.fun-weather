import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import RightSide from "./components/RightSide/RightSide";
import LeftSide from "./components/LeftSide/LeftSide";
import { useEffect, useState } from "react";

export default function App() {
  const [weather, setWeather] = useState({});
  const API_KEY =
    "https://api.weatherapi.com/v1/forecast.json?lang=pl&days=7&key=15670edce7f14fa5a5d82331232309&q=";

  const updateWeather = async (city) => {
    try {
      if (!city) return;
      const response = await fetch(`${API_KEY}${city}`);
      const data = await response.json();
      await setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateWeather("Warszawa");
  }, []);

  return (
    <div className="App ">
      <Navigation />
      <LeftSide updateWeather={updateWeather} weather={weather} />
      <RightSide weather={weather} />
    </div>
  );
}
