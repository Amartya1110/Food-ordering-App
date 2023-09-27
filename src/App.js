import React from "react";
import ReactDOM from "react-dom/client"
import MainContent from "./components/MainContent";

const Header = () => {
    return(
        <div id="header">
            <h1>Infinite Scroll</h1>
        </div>
    )
}





const App = () => {
    return(
        <>
            <Header />
            <MainContent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)