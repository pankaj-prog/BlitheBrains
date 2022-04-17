import { useState, createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAuth } from "./AuthContext";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const [historyVideos, setHistoryVideos] = useState([]);
  const { encodedToken } = useAuth();

  const { makeRequest: addToHistoryRequest, response: addToHistoryResponse } =
    useAxios();

  const {
    makeRequest: removeFromHistoryRequest,
    response: removeFromHistoryResponse,
  } = useAxios();

  const { makeRequest: clearHistoryRequest, response: clearHistoryResponse } =
    useAxios();

  const addToHistory = (video) => {
    if (encodedToken) {
      addToHistoryRequest({
        method: "post",
        url: "/api/user/history",
        headers: { authorization: encodedToken },
        data: { video },
      });
    }
  };

  useEffect(() => {
    if (addToHistoryResponse) {
      setHistoryVideos(addToHistoryResponse.history);
    }
  }, [addToHistoryResponse]);

  const removeFromHistory = (_id) => {
    removeFromHistoryRequest({
      method: "delete",
      url: `/api/user/history/${_id}`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (removeFromHistoryResponse) {
      setHistoryVideos(removeFromHistoryResponse.history);
    }
  }, [removeFromHistoryResponse]);

  const clearHistory = () => {
    clearHistoryRequest({
      method: "delete",
      url: `/api/user/history/all`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (clearHistoryResponse) {
      setHistoryVideos(clearHistoryResponse.history);
    }
  }, [clearHistoryResponse]);

  return (
    <HistoryContext.Provider
      value={{
        historyVideos,
        setHistoryVideos,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { useHistory, HistoryProvider };
