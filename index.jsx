import { createRoot } from "react-dom/client";
import React from "react";
import Header from "./Header";

const root = createRoot(document.getElementById("root"))

root.render(
    <Page />)



function MainComponent() {
    return (
        <>
        <h1>Reasons to love REACT!</h1>
                <ol>
                <li>FI Love React</li>
                <li>Really Love it</li>
                </ol>
        </>
    )
}

function FooterComponent() {
    return (
        <footer>
        <small>@Jaime 2025 All Rights Reserved</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainComponent />
            <FooterComponent />            
        </> 
    )
}