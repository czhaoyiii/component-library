import { FaQuoteLeft } from "react-icons/fa6";
import "./Testimonial.css";
import companyLogo from "../../assets/logo.png";

export default function Testimonial({ children, image, name, position }) {
  return (
    <div className={image ? "testimonial" : "testimonialNoPic"}>
      {image && <img className="testimonialImage" src={image} alt="" />}

      <div className={image ? "testimonialContent" : "testimonialContentNoPic"}>
        {image ? (
          <div className="testimonialIcon">
            <FaQuoteLeft />
          </div>
        ) : (
          <img className="companyLogo" src={companyLogo} alt="" />
        )}

        <p className={!image ? "testimonialText" : undefined}>{children}</p>
        <div className={!image ? "namePosition" : undefined}>
          <p className="testimonialName">{name}</p>
          {!image && <p className="testimonialSlash">/</p>}
          <p className="testimonialPosition">{position}</p>
        </div>
      </div>
    </div>
  );
}
