import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./WeatherSearch.js";
import "./App.css";
import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);
