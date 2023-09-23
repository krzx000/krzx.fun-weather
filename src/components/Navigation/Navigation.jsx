import "./Navigation.css";
import Page from "./Page/Page";

import {
  faCloudSunRain,
  faListUl,
  faMap,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <nav>
      <Page icon={faCloudSunRain} name={"Pogoda"} active={true} />
      <Page icon={faListUl} name={"Miasta"} active={false} />
      <Page icon={faMap} name={"Mapa"} active={false} />
      <Page icon={faSliders} name={"Ustawienia"} active={false} />
    </nav>
  );
}
