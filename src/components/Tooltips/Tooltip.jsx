import { useState } from "react";
import { statuses } from "../Banners/statuses";
import "./Tooltip.css";

export default function Tooltip({ children, status }) {
  const iconColor = { color: statuses[status].iconColor };
  const titleColor = { color: statuses[status].titleColor };
  const textColor = { color: statuses[status].textColor };
  const bgColor = { backgroundColor: statuses[status].bg };
  const arrowColor = { borderTop: `20px solid ${statuses[status].bg}` };

  const [showTooltip, setShowTooltip] = useState(false);

  function hover() {
    setShowTooltip(true);
  }

  function unhover() {
    setShowTooltip(false);
  }

  return (
    <div className="tooltipToast">
      <div className={`tooltipContainer ${showTooltip ? "open" : ""}`}>
        <div className="tooltip" style={bgColor}>
          <div style={iconColor}>{statuses[status].icon}</div>
          <div className="tooltipContent">
            <p className="bannerTitle" style={titleColor}>
              Click the button
            </p>
            <p className="bannerText" style={textColor}>
              Pressing the button will open up a toast on the button right for
              about 3 seconds
            </p>
          </div>
        </div>
        <div className="arrow" style={arrowColor}></div>
      </div>
      <div onMouseEnter={hover} onMouseLeave={unhover}>
        {children}
      </div>
    </div>
  );
}
