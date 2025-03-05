import React from 'react'
import './collections.css'
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar'
import Tag from '../Tag/Tag'
import Submenu from '../SubMenu/Submenu'
import imgCard1 from '../../assets/Persona5.png'
import imgCard3 from '../../assets/Persona3.png'
import { Link } from "react-router-dom";
const Collections = () => {
    return (
        <div className='container-collections active' id='top'>
            <Navbar />
            <Tag />
            <Submenu />
            <div className="section-collections">
                <section className='section-img'>
                    <div className='img-cole'>
                        <div class="content-colection">
                            <div className="content-image">
                                <img src={imgCard1} className="img-prev" alt="..." />
                                <div className="info-colection">
                                    <h3>Coleção de Verão</h3>
                                    <p>Camisas e Bermudas</p>
                                </div>
                            </div>
                        </div>
                        <div class="content-colection">
                            <div className="content-image">
                                <img src={imgCard3} className="img-prev" alt="..." />
                                <div className="info-colection">
                                    <h2>Coventry</h2>
                                    <Link to='/polo'>Polo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-about'>
                    <div className='text-about'>
                        <h3>Sobre</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Fuga nihil recusandae, deleniti maiores nisi libero ad, explicabo dolorem
                            inventore velit molestias animi provident eos facere illo officiis
                            similique aut! Quas!</p>
                    </div>
                </section>
                <section className="conteudo-masculino">
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgCard1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nome item</h5>
                            <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                            <p class="card-text">R$300,00</p>
                            <a href="#" class="cta">Ver Mais</a>
                            <a href="#" class="cta">Favoritar</a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
export default Collections