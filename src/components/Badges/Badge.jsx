import { colors } from "./colors";
import "./Badge.css";

export default function Badge({ children, color, shape }) {
  const styles = {
    color: colors[color].text,
    backgroundColor: colors[color].bg,
  };

  return (
    <div className={"badge " + shape} style={styles}>
      {children}
    </div>
  );
}
