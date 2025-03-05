import React from "react";
import './home.css'
import img1 from '../../assets/persona1.png'
import img2 from '../../assets/Persona2.png'
import img3 from '../../assets/Persona3.png'
import Tag from '../Tag/Tag';
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Submenu from "../SubMenu/Submenu";
const Home = () => {
    return (
        <div>
            <Tag/>
            <Navbar/>
            <Submenu/>
            <div className="container-Home">
                <section className="sec-home">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={img1} class="d-block" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={img2} class="d-block" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={img3} class="d-block" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>
            <Main/>
            <Footer/>
        </div>
    )
}
export default Home