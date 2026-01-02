import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router.jsx";
import { TodoProvider } from "./components/boards/welcome/TodoContext.jsx";
import { BackgroundProvider } from "./components/context/BackgroundContext.jsx"; // ✅ named import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <BackgroundProvider>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </BackgroundProvider>
    </TodoProvider>
  </StrictMode>
);
