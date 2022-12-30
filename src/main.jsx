import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Checkout from "./components/Checkout.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import {StateProvider} from "./States/StateProvider.jsx";
import reducer, {initialState} from "./States/reducer.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: '/shopping-cart',
                element: <ShoppingCart/>
            },
            {
                path: '/checkout',
                element: <Checkout/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <RouterProvider router={router}/>
      </StateProvider>
    </React.StrictMode>,
)
