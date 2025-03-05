import React from "react";
import { Link } from "react-router-dom";
import './signin.css'
import Tag from "../Tag/Tag"
import Footer from "../Footer/Footer"
const Signin = () => {
    return (
        <div className="container-signin">
            <Tag/>
            <section className="header-nav">
                <header>
                    <div className="nav-s">
                        <Link to="/">Coventry</Link>
                    </div>
                </header>
            </section>
            <div className="sec-Signin">
                <div className="wrapper">
                    <form className="login-form">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="E-mail" required/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember Me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                    <form className="register-form">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" placeholder="First Name" required/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last Name" required/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="E-mail" required/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <button type="submit" className="btn-login">Register</button>
                    </form>
                </div>
            </div>
            <Footer className="sec-footer"/>
        </div>
    )
}
export default Signin;