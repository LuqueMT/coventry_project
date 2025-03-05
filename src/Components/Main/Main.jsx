import React from "react";
import { Link } from "react-router-dom";
import './main.css';
import imgCard1 from '../../assets/Persona5.png';
import imgCard2 from '../../assets/Persona6.png'
import imgCard3 from '../../assets/Persona2.png'
import CarOptions from "../Products/CarouselOptions/CarOptions";
import ProdOptions from "../SubMenu/ProdOptions/ProdOptions";
const Main = () => {
   return (
      <div className="container-main">
         <section className="colection-prev">
            <div className="text-info-colection">
               <h2>Current Hot Collections</h2>
            </div>
            <div class="content-colection">
               <div className="content-image">
                  <img src={imgCard1} className="img-prev" alt="..." />
                  <div className="info-colection">
                     <h3>Coleção de Verão</h3>
                     <p>About that colection</p>
                     <Link to="/collections">
                        <span class="text">See More</span><span>Go!</span>
                     </Link>
                  </div>
               </div>
            </div>
            <div class="content-colection-mobile">
               <div className="content-image">
                  <img src={imgCard1} className="img-prev" alt="..." />
                  <div className="info-colection">
                     <h3>Coleção de Inverno</h3>
                     <p>About that colection</p>
                     <Link to="/collections">
                        <span class="text">See More</span><span>Go!</span>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
         <section className="conteudo-masculino">
            <div class="card">
               <img src={imgCard1} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard1} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard1} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard1} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
         </section>
         <CarOptions/>
         <section className="conteudo-femenino">
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
            <div class="card">
               <img src={imgCard2} class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Nome item</h5>
                  <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                  <p class="card-text">R$300,00</p>
                  <Link to="Produto" class="cta">Ver Mais</Link>
                  <a href="#" class="cta">Favoritar</a>
               </div>
            </div>
         </section>
         <section className="conteudo-extra">
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
               <div class="card">
                  <img src={imgCard3} class="card-img-top" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Nome item</h5>
                     <p class="card-text">Cores disponíveis: Branco, Preto e Azul</p>
                     <p class="card-text">R$300,00</p>
                     <Link to="Produto" class="cta">Ver Mais</Link>
                     <a href="#" class="cta">Favoritar</a>
                  </div>
               </div>
         </section>
         <ProdOptions />
      </div>
   )
}
export default Main