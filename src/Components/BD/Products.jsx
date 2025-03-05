import React from 'react';
export default function ProductsList({products, title}){
    return(
        <div className="product-list">
            <h2>{title}</h2>
            {products.map((product) => (
                    <div className="product-preview" key={product.id}>
                        <div class="card">
                            <img src={product.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <p class="card-text">{product.price}</p>
                                <a href="#" class="cta">Ver Mais</a>
                                <a href="#" class="cta">Favoritar</a>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}