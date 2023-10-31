import React from "react";
import ReactDOM from "react-dom/client"
import MainContent from "./components/MainContent";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./utils/store";



// App is the root component in our webapp, as all the components are subset of this App component
const App = () => {
    return(
        <Provider store={store}>
            <div className="App">
                <Header />
                <Outlet />
            </div>
        </Provider>
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