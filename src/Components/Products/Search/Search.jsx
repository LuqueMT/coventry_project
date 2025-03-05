import { useState, useEffect } from "react";
import IMG_1 from "../../../assets/Persona2.png"
import IMG_2 from "../../../assets/Persona3.png"
import IMG_3 from "../../../assets/Persona4.png"
import IMG_4 from "../../../assets/Persona5.png"
import IMG_5 from "../../../assets/Persona7.png"
import IMG_6 from "../../../assets/Persona8.png"
import Navbar from "../../Navbar/Navbar";
import Tag from "../../Tag/Tag";
import Footer from "../../Footer/Footer";
import "./search.css";
import ProductsList from "../../BD/Products";

function ProductsSearch() {
    const [products, setProducts] = useState([
        {
            name: "Camisa Polo",
            description: "Cores disponíveis: Branco Preto e Azul",
            img: IMG_1,
            id: 1,
            price: "R$300,00",
            type: "Calça",
        },
        {
            name: "Camisa Polo 2",
            description: "Cores disponíveis: Branco Preto e Azul",
            img: IMG_2,
            id: 2,
            price: "R$700,00",
            type: "Bermuda",
        },
        {
            name: "Camisa Polo 3",
            description: "Cores disponíveis: Branco Preto e Azul",
            img: IMG_3,
            id: 3,
            price: "R$500,00",
            type: "Camiseta",
        },
        {
            name: "Camisa Polo 4",
            description: "Cores disponíveis: Branco Preto e Azul",
            img: IMG_4,
            id: 4,
            price: "R$100,00",
            type: "Camisa",
        },
        {
            name: "Camisa Polo 4",
            description: "Cores disponíveis: Branco Preto e Azul",
            img: IMG_5,
            id: 5,
            price: "R$100,00",
            type: "Camisa",
        },
    ]);
    useEffect(() => {

    })
    return (
        <div className="list-products">
            <Navbar />
            <Tag />
            <div className="sec-container-prod">
                <div className="products-main">
                    <ProductsList products={products.filter((product) => product.type === "Camisa")} title="Camisas" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ProductsSearch;