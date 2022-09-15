import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthProvider from "./providers/Auth";
import { PagesRoutes } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PagesRoutes />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
