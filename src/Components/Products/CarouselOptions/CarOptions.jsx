import React from "react"
import IMG_1 from "../../../assets/Persona2.png"
import IMG_2 from "../../../assets/Persona3.png"
import IMG_3 from "../../../assets/Persona4.png"
import IMG_4 from "../../../assets/Persona5.png"
import IMG_5 from "../../../assets/Persona7.png"
import IMG_6 from "../../../assets/Persona8.png"
import './carOptions.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarOptions() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container-carOptions">
            <section className="sec-opt">
                <div className="card_container">
                    <Slider {...settings}>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_1} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_2} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_3} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_4} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_5} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_6} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_1} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img className="product-thumb" src={IMG_2} alt="" />
                                <button className="card-btn">Adicionar ao carrinho</button>
                            </div>
                            <div className="product-info">
                                <h2 className="product-brand">Nome Produto</h2>
                                <p className="product-short-description">a short line about the product</p>
                                <span className="price">R$300,00</span>
                                <span className="actual-price">R$500,00</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}
export default CarOptions