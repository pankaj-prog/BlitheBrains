import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const AlertContext = createContext(null);

const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alertList, setAlertList] = useState([]);

  const showAlert = (message, type) => {
    setAlertList((prev) => [...prev, { id: uuid(), type, message }]);
  };

  return (
    <AlertContext.Provider value={{ alertList, showAlert, setAlertList }}>
      {children}
    </AlertContext.Provider>
  );
};

export { useAlert, AlertProvider };
