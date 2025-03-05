import { Link } from 'react-router-dom';
import "./navItem.css";
import { FaBars } from "@react-icons/all-files/fa/FaBars.esm";
import { FaReply } from "@react-icons/all-files/fa/FaReply.esm";
import { useState } from 'react';

const NavItem = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <section className="mobile-header">
            <nav className="navbar">
                <Link to="/" className='logo'>
                    <h2>C</h2>
                </Link>
                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="" className="nav-link">Meu Carrinho</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="" className="nav-link">Favoritos</Link>
                    </li>
                    <li className="nav-item">
                    <li><Link to="/myaccount" className="nav-link">Minha Conta </Link></li>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" >Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/collections" className="nav-link">Coleções</Link>
                    </li>
                </ul>
                <button className='btn-mobile' onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaReply/> : <FaBars/>}
                </button>
                <button className="btn-default">Click Here</button>
            </nav>
        </section>
    )
}
export default NavItem