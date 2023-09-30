import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
