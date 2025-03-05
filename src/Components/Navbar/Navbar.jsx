import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import imageLogo from "../../assets/LogoShortB.png"
import Signin from "../Signin/Signin";
import MyAccount from "../MyAccount/MyAccount";
import NavItem from "./NavItem/NavItem";
const Navbar = () => {
    return (
        <div className="container1">
            <header className="navBarSection">
                <div className="logo">
                    <Link className="logof" to="/">Coventry</Link>
                    <div className="logoimage">
                        <h1>C</h1>
                    </div>
                </div>
                <nav className="navBar">
                    <ul className="nav__links">
                        <li className="form-search">
                            <div className="input_group">
                                <input type="text" className="search-bar" placeholder="Search for what you need..."/>
                            </div>
                        </li>
                        <li><Link to="#">Meu Carrinho</Link></li>
                        <li><Link to="#">Produtos</Link></li>
                        <li><Link to="/myaccount">Minha Conta</Link></li>
                    </ul>
                </nav>
                <Link className="cta" to="/signin">
                    <button>Signin</button>
                </Link>
            </header>
            <NavItem/>
        </div>
    )
}
export default Navbar