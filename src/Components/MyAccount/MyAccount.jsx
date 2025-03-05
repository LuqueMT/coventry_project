import React from "react";
import { Link } from "react-router-dom";
import './myacc.css'
import Tag from "../Tag/Tag"
import Footer from "../Footer/Footer"
import IMGProfile from "../../assets/persona1.png"

const MyAccount = () => {
    return (
        <div id="container-acct" className="container-account">
            <Tag /> 
            <div className="section-info">
                <header className="logo-btn">
                    <Link to='/'>Coventry</Link>
                </header>
                <section className="card-info">
                    <img src={IMGProfile} alt="" />
                    <h3>Nome</h3>
                    <h4>exemplo@gmail.com</h4>
                    <button>Logout</button>
                </section>
                <section className="sec-form">
                    <header>Perfil</header>
                    <form action="#">
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Informações do Usuário</span>
                                <div className="fields">
                                    <div className="input-field">
                                        <label>Nome Completo:</label>
                                        <input type="text"placeholder="Digite Seu Nome" />
                                    </div>
                                    <div className="input-field">
                                        <label>Data De Nascimento:</label>
                                        <input type="date"placeholder="DD/MM/AAAA" />
                                    </div>
                                    <div className="input-field">
                                        <label>Email:</label>
                                        <input type="email"placeholder="Digite Seu E-mail" />
                                    </div>
                                    <div className="input-field">
                                        <label>Número De Telefone:</label>
                                        <input type="text"placeholder="(99) 99999-9999" />
                                    </div>
                                    <div className="input-field">
                                        <label>Gênero:</label>
                                        <input type="text"placeholder="Digite Seu Gênero"/>
                                    </div>
                                    <div className="input-field">
                                        <label>Senha</label>
                                        <input type="password"placeholder="Digite Sua Senha" required />
                                    </div>
                                    <button type="submit" className="save-btn">Salvar Alterações</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="more-info">
                    <header>Endereço</header>
                    <form action="#">
                        <div className="form first">
                            <div className="details lacation">
                                <span className="title">Endereço Principal</span>
                                <div className="fields">
                                    <div className="input-field">
                                        <label>Estado:</label>
                                        <input type="text"placeholder="Digite Seu Nome" />
                                    </div>
                                    <div className="input-field">
                                        <label>Cidade:</label>
                                        <input type="text"placeholder="Cidade" />
                                    </div>
                                    <div className="input-field">
                                        <label>Bairro:</label>
                                        <input type="text"placeholder="Digite Seu Bairro" />
                                    </div>
                                    <div className="input-field">
                                        <label>Número:</label>
                                        <input type="number"placeholder="Número Da Casa Ou AP" />
                                    </div>
                                    <div className="input-field">
                                        <label>Logradouro:</label>
                                        <input type="text"placeholder="Casa/Ap/Condomínio"/>
                                    </div>
                                    <div className="input-field">
                                        <label>Ponto de Referência:</label>
                                        <input type="text"placeholder="Perto de... / Ao Lado de..."/>
                                    </div>
                                    <button type="" className="save-btn">Salvar Alterações</button>
                                </div>
                                <span className="title second">Endereço Secundário</span>
                                <div className="fields">
                                    <div className="input-field">
                                        <label>Estado:</label>
                                        <input type="text"placeholder="Digite Seu Nome" />
                                    </div>
                                    <div className="input-field">
                                        <label>Cidade:</label>
                                        <input type="text"placeholder="Cidade" />
                                    </div>
                                    <div className="input-field">
                                        <label>Bairro:</label>
                                        <input type="text"placeholder="Digite Seu Bairro" />
                                    </div>
                                    <div className="input-field">
                                        <label>Número:</label>
                                        <input type="number"placeholder="Número Da Casa Ou AP" />
                                    </div>
                                    <div className="input-field">
                                        <label>Logradouro:</label>
                                        <input type="text"placeholder="Casa/Ap/Condomínio"/>
                                    </div>
                                    <div className="input-field">
                                        <label>Ponto de Referência:</label>
                                        <input type="text"placeholder="Perto de... / Ao Lado de..."/>
                                    </div>
                                    <div className="input-field">
                                        <label>Numero de Referência:</label>
                                        <input type="text"placeholder="(99) 99999-9999"/>
                                    </div>
                                    <button type="" className="save-btn">Salvar Alterações</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
           
            <Footer />
        </div>
    )
}
export default MyAccount