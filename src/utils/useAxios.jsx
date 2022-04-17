import React, { useState } from "react";
import { useAlert } from "../context";
import axios from "axios";

export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { showAlert } = useAlert();

  const makeRequest = async (params) => {
    try {
      setLoading(true);
      const res = await axios.request(params);
      setResponse(res.data);
    } catch (error) {
      if (!(params.method == "post" && params.url == "/api/user/history")) {
        if (error.response && error.response.data.errors) {
          showAlert(error.response.data.errors[0], "error");
        }
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, makeRequest };
};
