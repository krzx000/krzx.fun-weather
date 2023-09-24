import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Page.css";

export default function Page({ icon, name, active }) {
  const color = active ? "#3A4555" : "#9EA4AC";
  const className = `Page--Name ${active ? "active" : ""}`;

  return (
    <div className="Page">
      <div className="Page--Icon">
        <FontAwesomeIcon icon={icon} color={color} size="xl" />
      </div>
      <div className={className}>{name}</div>
    </div>
  );
}
