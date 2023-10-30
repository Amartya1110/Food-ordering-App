import React from "react";
import ReactDOM from "react-dom/client"
import MainContent from "./components/MainContent";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Header from "./components/Header/Header";







const App = () => {
    return(
        <div className="App">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:"/",
                element: <MainContent />,
            },
            {
                path:"resMenu/:resID",
                element: <RestaurantMenu />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)