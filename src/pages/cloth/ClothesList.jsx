import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link} from "react-router-dom";


const ClothesList = () => {
    const [cloths, setCloths] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setCloths)
    }, []);

    return (
        <div className="ClothList-container">
            {
                cloths.map(
                    (cloths) => (
                    <ul>
                        <li>
                            <div key={cloths.cid}>
                                <h1>{cloths.cname}</h1>
                                <p>{cloths.cprice}원</p>
                                <p>색상: {cloths.ccolor}</p>
                                <p>카테고리: {cloths.ccategory}</p>
                                <Link to={`/clothes/${cloths.cid}`}>상세보기</Link>
                            </div>
                        </li>
                    </ul>
                ))
            }
            <Link to={"/clothes/add"}>추가하기</Link>
        </div>
    )
}

export default ClothesList;