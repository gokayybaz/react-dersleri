import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// Virtual DOM'a public.html'de oluşturulan id'si root olan div verilip bir root oluşturuluyor.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Virtual DOM'da render yapısı kullanılarak ilgili Component'in uygulama/sayfa açıldığında renderlanması sağlanıyor.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
