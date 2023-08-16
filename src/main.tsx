import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrimeReactContext } from "primereact/api";
import AOS from "aos";
import "./index.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
// import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactContext.Provider value={{ ripple: true, locale: "en" }}>
      <App />
    </PrimeReactContext.Provider>
  </React.StrictMode>
);
