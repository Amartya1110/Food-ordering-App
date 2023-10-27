import React from "react";
import ReactDOM from "react-dom/client"
import MainContent from "./components/MainContent";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const Header = () => {
    return(
        <div id="header">
            <h1>Infinite Scroll</h1>
        </div>
    )
}





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
                path:"resMenu",
                element: <RestaurantMenu />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)