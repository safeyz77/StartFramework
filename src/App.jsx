import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "contact", element: <Contact /> },
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> }
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
