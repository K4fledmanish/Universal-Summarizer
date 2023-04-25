/**
 * Renders the main React application to the DOM.
 * @param {{string}} "root" - The ID of the root element to render the application to.
 * @returns None
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);