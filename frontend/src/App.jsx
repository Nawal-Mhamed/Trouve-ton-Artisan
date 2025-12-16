import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <button className="btn btn-primary">Bouton</button>
    </>
  );
}

export default App;
