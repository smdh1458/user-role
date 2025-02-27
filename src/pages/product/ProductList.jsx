import {useEffect, useState} from "react";
import apiProductService from "./apiProductService";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        apiProductService.getProduct(setProduct);
    }, []);

    return(
        <div className="ProductList-container">
            {
                product.map(
                    (product) => (
                    <li>
                        <div key={product.productId}>
                        <h3>{product.productName}</h3>
                        <p>가격: {product.productPrice}원</p>
                        <p>수량: {product.productStock}개</p>
                            <Link to={`/products/${product.productId}`}>이동</Link>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default ProductList;