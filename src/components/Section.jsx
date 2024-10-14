export default function Section({ children, header }) {
  return (
    <div className="sectionComponent">
      <h2 className="sectionTitle">{header}</h2>
      {children}
    </div>
  );
}
