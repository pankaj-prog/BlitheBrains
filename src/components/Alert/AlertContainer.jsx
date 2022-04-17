import React from "react";
import { useAlert } from "../../context";
import Alert from "./Alert";
import "./Alert.css";

const AlertContainer = () => {
  const { alertList } = useAlert();

  return (
    <div className="alert-container">
      {[...alertList]?.reverse().map((alert) => (
        <Alert key={alert._id} alert={alert} />
      ))}
    </div>
  );
};

export default AlertContainer;
