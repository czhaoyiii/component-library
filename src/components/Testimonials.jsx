import Section from "./Section";
import Testimonial from "./Testimonials/Testimonial.jsx";

export default function Testimonials() {
  return (
    <Section header="Testimonials">
      <h3>With Image</h3>
      <Testimonial
        name="Sarah Woods"
        position="Scrimba, CTO"
        image="https://images.unsplash.com/photo-1630939687530-241d630735df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        mollitia adipisci distinctio tempora eveniet similique aliquid.
      </Testimonial>
      <h3>Without Image</h3>
      <Testimonial name="Sarah Woods" position="Scrimba, CTO">
        &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        mollitia adipisci distinctio tempora eveniet similique aliquid.&quot;
      </Testimonial>
    </Section>
  );
}
