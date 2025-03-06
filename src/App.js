import React from "react";
import Form from "./Form/Form.js";
import NavBar from "./Routing/NavBar";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Routing/Router.js";
import Number from "./Number.js"

function App() {
  return (
    <div>
      <h1> React practice </h1>
      <h2>Routing (Problem 4)</h2>
      <React.StrictMode>
        <RouterProvider router={MainRouter}>
          <NavBar />
        </RouterProvider>
      </React.StrictMode>

      <h2>Data handling (Problem 5)</h2>
      <Form />
      <h2>Append the number (Problem 6)</h2>
      <Number />
    </div>
  );
}

export default App;
