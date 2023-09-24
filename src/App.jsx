import { useEffect, useState } from "react";
//import { useMediaQuery } from "react-responsive";
import Navigation from "./components/Navigation/Navigation";
import RightSide from "./components/RightSide/RightSide";
import LeftSide from "./components/LeftSide/LeftSide";
import "./App.css";

const API_KEY =
  "https://api.weatherapi.com/v1/forecast.json?lang=pl&days=7&key=15670edce7f14fa5a5d82331232309&q=";

export default function App() {
  const [weather, setWeather] = useState({});
  // const [isDark, setIsDark] = useState(false);

  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (isSystemDark) => setIsDark(isSystemDark)
  // );

  const updateWeather = async (city) => {
    if (!city) return;
    try {
      const response = await fetch(`${API_KEY}${city}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateWeather("Tarnów");
  }, []);

  return (
    <div className="App">
      <Navigation />
      <LeftSide updateWeather={updateWeather} weather={weather} />
      <RightSide weather={weather} />
    </div>
  );
}
