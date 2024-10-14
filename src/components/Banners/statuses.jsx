import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";

export const statuses = {
  success: {
    icon: <FaCircleCheck />,
    iconColor: "#34D399",
    title: "Congratulations!",
    titleColor: "#065F46",
    textColor: "#047857",
    bg: "#D1FAE5",
  },
  warning: {
    icon: <FaTriangleExclamation />,
    iconColor: "#FBBF24",
    title: "Attention",
    titleColor: "#92400E",
    textColor: "#B45309",
    bg: "#FFFBEB",
  },
  error: {
    icon: <FaCircleXmark />,
    iconColor: "#F87171",
    title: "There is a problem with your application",
    titleColor: "#92400E",
    textColor: "#B45309",
    bg: "#FEF2F2",
  },
  neutral: {
    icon: <FaCircleInfo />,
    iconColor: "#60A5FA",
    title: "Update available",
    titleColor: "#1E40AF",
    textColor: "#1C51B9",
    bg: "#EFF6FF",
  },
};
