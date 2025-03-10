import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Oops! Something went wrong. </h1>
            <p>{error.statusText || "An unknown error occurred"}</p>
            <a href="/">Go Back to Home</a>
        </div>
    );
}

export default ErrorPage;
