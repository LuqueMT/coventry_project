import React from "react";
import './produto.css'
import NavBar from "../../Navbar/Navbar"
import Tag from "../../Tag/Tag"
import Footer from "../../Footer/Footer"
import CarOptions from "../CarouselOptions/CarOptions";
import imgCard3 from '../../../assets/Persona2.png'
const Produto = () => {
    return (
        <div className="container-produto">
            <NavBar />
            <Tag />
            <div className="section-produto">
                <div className="prev-img-prod">
                    <div className="img-prin">
                        <img src={imgCard3} class="card-img-top" alt="..." />
                    </div>
                    <div className="img-sec">
                        <img src={imgCard3} class="card-img-small" alt="..." />
                        <img src={imgCard3} class="card-img-small" alt="..." />
                        <img src={imgCard3} class="card-img-small" alt="..." />
                    </div>
                </div>
                <div className="detalhes">
                    <h2>Nome</h2>
                    <p>Descrição do produto</p>
                    <p>Preço: R$300,00</p>
                    <div className="define">
                        <p>Tamanho:</p>
                        <button className="cta-size">P</button>
                        <button className="cta-size">M</button>
                        <button className="cta-size">G</button>
                        <button className="cta-size">GG</button>
                        <button className="cta-size">XG</button>
                    </div>
                    <p>Cores:</p>
                    <div className="colors">
                        <button className="cta-branco"></button>
                        <button className="cta-preto"></button>
                        <button className="cta-azul"></button>
                    </div>
                    <div className="opt-entrega">
                        <h3>Opções de fretes:</h3>
                        <div className="entrega-info">
                            <h4>Endereço:</h4>
                            <p>Rua Exemplo, N°123, Bairro Exem, Estado. </p>
                        </div>
                        <div className="entrega-frete">
                            <div className="opt-entrega-sec">
                                <h4>Opção De Entrega 1</h4>
                                <p>R$###,##</p>
                                <input type="radio*"/>
                                <div class="checkmark"></div>
                            </div>
                            <div className="opt-entrega-sec">
                                <h4>Opção De Entrega 2</h4>
                                <p>R$###,##</p>
                                <input type="radio"/>
                                <div class="checkmark"></div>
                            </div>
                            <div className="opt-entrega-sec">
                                <h4>Opção De Entrega 3</h4>
                                <p>R$###,##</p>
                                <input type="radio"/>
                                <div class="checkmark"></div>
                            </div>
                        </div>
                    </div>
                    <div className="finalizar">
                        <button className="cta-2">Adicionar ao Carrinho</button>
                        <button className="cta-2">Comprar</button>
                    </div>
                </div>
            </div>
            <CarOptions/>
            <Footer />
        </div>
    )
}
export default Produto