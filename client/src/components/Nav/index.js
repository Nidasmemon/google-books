import React from "react";
import "../../styles/style.css";

function Nav() {
    return (
        <div className="navbar" id="nav">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">Google Books&emsp;&emsp;</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Search&emsp;&emsp;</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Nav;