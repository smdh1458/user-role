import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link, useNavigate, useParams} from "react-router-dom";

const ClothesDetail = () => {
    const {id} = useParams();
    const [cloth, setCloth] = useState("");
    const navigate =useNavigate();

    useEffect(() => {
        apiClothesService.getClothesById(id, setCloth)
    }, [id]);

    const deleteCloth = () => {
        apiClothesService.deleteClothes(id, "삭제되었습니다.");
        navigate(-1);
    }

    return(
        <div>
            <h1>{cloth?.cname}</h1>
            <p>카테고리: {cloth?.ccategory}</p>
            <p>가격: {cloth?.cprice}원</p>
            <p>재질: {cloth?.cmaterial}</p>
            <Link to={`/clothes/edit/${cloth?.cid}`}>수정하기</Link>
            <button onClick={deleteCloth}>삭제하기</button>
        </div>
    )
}

export default ClothesDetail;