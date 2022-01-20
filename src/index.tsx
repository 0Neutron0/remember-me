import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App/App";
import { setupStor } from "./redux/store";
import "./index.sass";

const stor = setupStor();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

