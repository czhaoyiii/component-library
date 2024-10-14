import { useState } from "react";

export default function useToast() {
  const [toasts, setToasts] = useState([]);

  function addToast(toastProp) {
    const id = new Date().getUTCMilliseconds();
    setToasts((prevToasts) => [...prevToasts, { ...toastProp, id }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3200);
  }

  return [toasts, addToast];
}
