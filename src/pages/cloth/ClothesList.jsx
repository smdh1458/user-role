import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link} from "react-router-dom";
import ClothesCard from "./ClothesCard";


const ClothesList = () => {
    const [cloths, setCloths] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setCloths)
    }, []);

    const handleDelete = (cid) => {
        apiClothesService.deleteClothes(cid);
    }

    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {cloths.map((clothe) => (
                        <ClothesCard
                            key={clothe.id}
                            id={clothe.cid}
                            name={clothe.cname}
                            price={clothe.cprice}
                            image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                            onDelete={handleDelete}// 삭제 기능 함수를 onDelete 라는 명칭으로 ClothesCard에 전달
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClothesList;