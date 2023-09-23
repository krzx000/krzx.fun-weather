import "./Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page({ icon, name, active }) {
  return (
    <div className="Page">
      <div className="Page--Icon">
        <FontAwesomeIcon
          icon={icon}
          color={active ? "#3A4555" : "#9EA4AC"}
          size="xl"
        />
      </div>
      <div className={active ? "Page--Name active" : "Page--Name "}>{name}</div>
    </div>
  );
}
