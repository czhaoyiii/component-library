import { statuses } from "../Banners/statuses";

export default function Toast({ status }) {
  const iconColor = { color: statuses[status].iconColor };
  const titleColor = { color: statuses[status].titleColor };
  const textColor = { color: statuses[status].textColor };
  const bgColor = { backgroundColor: statuses[status].bg };
  return (
    <div className="tooltip toast" style={bgColor}>
      <div style={iconColor}>{statuses[status].icon}</div>
      <div className="tooltipContent">
        <p className="bannerTitle" style={titleColor}>
          Toasts!
        </p>
        <p className="bannerText" style={textColor}>
          Mr Stark, I don't feel so good...
        </p>
      </div>
    </div>
  );
}
