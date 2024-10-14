import Section from "./Section.jsx";
import Badge from "./Badges/Badge.jsx";
import { colors } from "./Badges/colors.jsx";

export default function Badges() {
  const colorsArray = Object.keys(colors);
  return (
    <Section header="Badges">
      <h3>Squares</h3>
      <div className="badges">
        {colorsArray.map((color) => (
          <Badge key={color} color={color} shape="square">
            Badge
          </Badge>
        ))}
      </div>
      <h3>Pills</h3>
      <div className="badges">
        {colorsArray.map((color) => (
          <Badge key={color} color={color} shape="pill">
            Badge
          </Badge>
        ))}
      </div>
    </Section>
  );
}
