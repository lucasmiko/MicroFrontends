import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

window.renderApp = () => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        ReactDOM.render(
            <>
                <h1>Hello, this a page build with React</h1>
                <br/>
                <Button variant="contained">This is a Button from Material UI</Button>
            </>, domElement);
    }
};