import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import {
  AlertProvider,
  AuthProvider,
  CategoryProvider,
  LikedVideoProvider,
  WatchLaterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AlertProvider>
          <WatchLaterProvider>
            <LikedVideoProvider>
              <CategoryProvider>
                <App />
              </CategoryProvider>
            </LikedVideoProvider>
          </WatchLaterProvider>
        </AlertProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
