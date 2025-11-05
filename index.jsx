import React from "react";
import { createRoot } from "react-dom/client";

function MainContent() {
    return ( <h1>My First Function</h1>)
}
const container = document.getElementById("root");
// createRoot returns a root you can call `.render()` on
const root = createRoot(container);

root.render(
    <div>
        <MainContent />
    </div>
);