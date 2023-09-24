import {
  faCloudSunRain,
  faListUl,
  faMap,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Page from "./Page/Page";
import "./Navigation.css";

const pages = [
  { icon: faCloudSunRain, name: "Pogoda", active: true },
  { icon: faListUl, name: "Miasta", active: false },
  { icon: faMap, name: "Mapa", active: false },
  { icon: faSliders, name: "Ustawienia", active: false },
];

export default function Navigation() {
  return (
    <nav>
      {pages.map((page) => (
        <Page
          key={page.name}
          icon={page.icon}
          name={page.name}
          active={page.active}
        />
      ))}
    </nav>
  );
}
