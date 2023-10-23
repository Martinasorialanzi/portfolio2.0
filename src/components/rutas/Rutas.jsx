import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";


export const Rutas = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path:'/', element:<Home/>}
      ]
    },
  ]);
