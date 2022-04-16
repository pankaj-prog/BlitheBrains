import React, { useEffect } from "react";
import { useAlert } from "../../context";

const Alert = ({ alert }) => {
  const { alertList, setAlertList } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      setAlertList((prev) => {
        return prev.filter((item) => item.id !== alert.id);
      });
    }, 2000);
  }, [alertList]);

  const iconClassName = (alertType) => {
    switch (alertType) {
      case "success":
        return "fa-check-circle";
      case "erroe":
        return "fa-exclamation-triangle";
      default:
        return "";
    }
  };

  return (
    <div class={`alert alert-${alert.type}`}>
      <i class={`fas alert-icon ${iconClassName(alert.type)} `}></i>
      <p class="alert-message"> {alert.message}</p>
    </div>
  );
};

export default Alert;
