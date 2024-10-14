import "./Card.css";

export default function Card({ children, title, icon }) {
  const iconStyle = {
    marginTop: icon ? "1.5rem" : "0",
  };
  return (
    <div className="card">
      {icon && <div className="cardIcon">{icon}</div>}
      <p className="cardTitle" style={iconStyle}>
        {title}
      </p>
      <p className="cardText">{children}</p>
    </div>
  );
}
