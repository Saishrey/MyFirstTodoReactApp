import React from "react";
import { ReactDOM } from "react";
import viteLogo from '/vite.svg'

function Header() {
    return (
        <header>
            <nav>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header