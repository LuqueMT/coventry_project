import React from "react";
import { Link } from "react-router-dom";
import './prodOptions.css';
import IMGdesc1 from "../../../assets/persona1.png"
import IMGdesc2 from "../../../assets/Persona2.png"
import IMGdesc3 from "../../../assets/Persona3.png"
import IMGdesc4 from "../../../assets/Persona4.png"
import IMGdesc5 from "../../../assets/Persona5.png"
import IMGdesc6 from "../../../assets/Persona6.png"
const ProdOptions = () => {
    return (
        <div className="container-ProdOptions">
            <section className="product">
                <h2 className="product-category">Confira Também:</h2>
                <div className="product-container">
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc1} alt="" />
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
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc2} alt="" />
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
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc3} alt="" />
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
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc4} alt="" />
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
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc5} alt="" />
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
                            <span className="discount-tag">50% off</span>
                            <img className="product-thumb" src={IMGdesc6} alt="" />
                            <button className="card-btn">Adicionar ao carrinho</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Nome Produto</h2>
                            <p className="product-short-description">a short line about the product</p>
                            <span className="price">R$300,00</span>
                            <span className="actual-price">R$500,00</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProdOptions;