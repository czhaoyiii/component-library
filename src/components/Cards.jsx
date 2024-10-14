import { FaCloudArrowUp } from "react-icons/fa6";
import Card from "./Cards/Card";
import Section from "./Section";

export default function Cards() {
  return (
    <Section header="Cards">
      <Card title="Card with icon" icon={<FaCloudArrowUp />}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto
        ut beatae in sint sequi, velit numquam. Facilis exercitationem magnam
        ipsa, deserunt a dolores consequatur!
      </Card>
      <Card title="Card without icon">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto
        ut beatae in sint sequi, velit numquam. Facilis exercitationem magnam
        ipsa, deserunt a dolores consequatur!
      </Card>
    </Section>
  );
}
