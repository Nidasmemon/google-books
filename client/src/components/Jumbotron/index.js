import React from "react";
import "../../styles/style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 id="jumboTitle" style={{fontSize: "5em", color: "black", marginTop: "80px" }}>(React) Google Books Search</h1>
            <h4 style={{fontSize: "2.5em", color: "black"}}>Search for and Save Books of Interest</h4>
        </div>
    )
}

export default Jumbotron;