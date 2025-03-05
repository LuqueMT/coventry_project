import React from "react";
import './footer.css'
const Footer = () =>{
    return(
        <div className="container-footer">
            <footer>
                <div className="footer_content">
                    <div className="footer_contacts">
                        <h1>Coventry</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="footer_social_media">
                            <a href="" className="footer-link instagram-icon">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="" className="footer-link facebook">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="" className="footer-link whatsapp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <ul className="footer-list">
                        <li>
                            <h3>Coventry</h3>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Nossas Lojas</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Fashion's</a>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <h3>Utilities</h3>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Politica De Privacidae</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Politica de Cookies</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Formas de Pagamento</a>
                        </li>
                    </ul>
                    <div className="footer_subscribe">
                        <h3>Subscribe</h3>
                        <p>
                            Enter your e-mail to get notified about our news solutions
                        </p>
                        <div className="input_group">
                            <input type="email" className="email-input"/>
                            <button>
                                <i className="fa-regular fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 
                    2023 all rights reserved.
                </div>
            </footer>
        </div>
    )
}
export default Footer