import { useParams } from "react-router-dom";

function ProductDetails(){
    const { id } = useParams();
    return(
        <div className="product-details">
            <h2>Detalhe do produto {id}</h2>
        </div>
    )
}
export default ProductDetails