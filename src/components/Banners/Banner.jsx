import "./Banner.css";
import { statuses } from "./statuses";

export default function Banner({ children, status, multi }) {
  const styleBg = { backgroundColor: statuses[status].bg };
  const iconColor = { color: statuses[status].iconColor };
  const titleColor = { color: statuses[status].titleColor };
  const textColor = { color: statuses[status].textColor };
  return (
    <div className="banner" style={styleBg}>
      <div style={iconColor}>{statuses[status].icon}</div>
      <div className="bannerContent">
        <p className="bannerTitle" style={titleColor}>
          {statuses[status].title}
        </p>
        {multi && (
          <p className="bannerText" style={textColor}>
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
