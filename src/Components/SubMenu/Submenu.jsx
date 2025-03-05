import React from "react";
import { Link } from "react-router-dom";
import './submenu.css';
const Submenu = () => {
    return (
        <div className="container-submenu">
            <header className="navBarSection-sub">
                <nav className="navBar-sub">
                    <ul className="nav__links-sub">
                        <li><Link to="#">Camisas</Link></li>                        
                        <li><Link to="#">Camisetas</Link></li>                        
                        <li><Link to="#">Polo</Link></li>                        
                        <li><Link to="#">Calças</Link></li>                        
                        <li><Link to="#">Bermudas</Link></li>                        
                        <li><Link to="#">Calçados</Link></li>                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Submenu