import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
