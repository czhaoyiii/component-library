import Section from "./Section";
import Tooltip from "./Tooltips/Tooltip.jsx";
import useToast from "./Toasts/useToast.jsx";
import Toasts from "./Toasts/Toasts.jsx";

export default function TooltipsToasts() {
  const [toasts, addToast] = useToast();
  console.log(toasts);
  return (
    <Section header="Tooltips & Toasts">
      <div className="tooltipsToasts">
        <Tooltip status="success">
          <button onClick={() => addToast({ status: "success" })}>
            Hover me
          </button>
        </Tooltip>
        <Tooltip status="error">
          <button onClick={() => addToast({ status: "error" })}>
            Hover me
          </button>
        </Tooltip>
      </div>
      <Toasts toasts={toasts} />
    </Section>
  );
}
