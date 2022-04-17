import React, { useEffect } from "react";
import { useAlert } from "../../context";

const Alert = ({ alert }) => {
  const { alertList, setAlertList } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      setAlertList((prev) => {
        return prev.filter((item) => item._id !== alert._id);
      });
    }, 3000);
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
    <div className={`alert alert-${alert.type}`}>
      <i className={`fas alert-icon ${iconClassName(alert.type)} `}></i>
      <p className="alert-message"> {alert.message}</p>
    </div>
  );
};

export default Alert;
