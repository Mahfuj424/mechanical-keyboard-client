import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </CartProvider>
  </React.StrictMode>
);
