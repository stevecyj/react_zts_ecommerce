import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global, css } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Global
        styles={css`
          body {
            color: var(--semi-color-text-0);
            background-color: var(--semi-color-bg-0);
          }

          .semi-navigation-horizontal
            .semi-navigation-list
            .semi-navigation-item {
            color: var(--semi-color-text-0);
          }

          .semi-navigation-horizontal
            .semi-navigation-list
            .semi-navigation-item-selected {
            color: #1199fa;
          }
        `}
      />
      <App />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
