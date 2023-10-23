import React from "react";
import ReactDOM from "react-dom/client"
import MainContent from "./components/MainContent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
            <MainContent />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)