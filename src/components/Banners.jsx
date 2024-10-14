import { useState } from "react";
import Section from "./Section";
import Banner from "./Banners/Banner.jsx";
import { statuses } from "./Banners/statuses.jsx";

export default function Banners() {
  const statusArray = Object.keys(statuses);

  const [multi, setMulti] = useState(true);

  function toggleLine() {
    setMulti((prevMulti) => !prevMulti);
  }

  return (
    <Section header="Banners">
      <h3>{multi ? "Multi Line" : "Single Line"}</h3>
      {statusArray.map((status) => (
        <Banner key={status} status={status} multi={multi}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto ut beatae in sint sequi, velit numquam.
        </Banner>
      ))}
      <button onClick={toggleLine} className="bannerBtn">
        {multi ? "Single Line" : "Multi Line"}
      </button>
    </Section>
  );
}
