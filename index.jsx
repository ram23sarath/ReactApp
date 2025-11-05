import React from "react";
import { createRoot } from "react-dom/client";

// Quick runtime check
console.log("index.jsx loaded");

createRoot(document.querySelector("#root")).render(<ul>
    <li>Jaime 1</li>
    <li>Jaime 2</li>
    <li>Jaime 3</li>
    </ul>);