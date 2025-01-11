import "./main.css";
import React from "react";
import Router from "./routes";
import { createRoot } from "react-dom/client";
import { Toaster } from 'react-hot-toast'

const app = createRoot(document.querySelector("#root"));
app.render(
  <React.StrictMode>
     <Toaster position='top-center' reverseOrder={false} />
    <Router />
  </React.StrictMode>
);
