import Toast from "./Toast";
import "./Toasts.css";

export default function Toasts({ toasts }) {
  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <Toast status={toast.status} />
      ))}
    </div>
  );
}
