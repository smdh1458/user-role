import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiProductService from "./apiProductService";

const ProductUpdate = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const [product, setProduct] = useState({
        productName: "",
        productCategory: "" ,
        productPrice: "",
        productStock: "",
        productDescription: ""
    });


    useEffect(() => {
        apiProductService.getProductById(productId, (data) => {
            setProduct(data.productName);
            setProduct(data.productCategory);
            setProduct(data.productPrice);
            setProduct(data.productStock);
            setProduct(data.productDescription);
        });
    }, [productId]);


    const handleUpdate = () => {
        apiProductService.updateProduct(productId, product, navigate);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }
    return (
        <div className="row">
            <div className="col-8 mx-auto">
                <h2>상품수정</h2>
                <div className="mb-3">
                    <label className="form-label">
                        상품명
                    </label>
                    <input type="text"
                           className="form-control"
                           name="productName"
                           value={product.productName}
                           onChange={handleChange}
                    />

                    <label className="form-label">
                        카테고리명
                    </label>
                    <input type="text"
                           className="form-control"
                           name="productCategory"
                           value={product.productCategory}
                           onChange={handleChange}
                    />

                    <label className="form-label">
                        상품가격
                    </label>
                    <input type="number"
                           className="form-control"
                           name="productPrice"
                           value={product.productPrice}
                           onChange={handleChange}
                    />

                    <label className="form-label">
                        상품수량
                    </label>
                    <input type="number"
                           className="form-control"
                           name="productStock"
                           value={product.productStock}
                           onChange={handleChange}
                    />

                    <label className="form-label">
                        상품설명
                    </label>
                    <input type="text"
                           className="form-control"
                           name="productDescription"
                           value={product.productDescription}
                           onChange={handleChange}
                    />
                    <button className="btn btn-success mt-3"
                        onClick={handleUpdate}
                    >수정 완료</button>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdate;