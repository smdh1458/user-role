import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";


const EditClothes = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const [cName, setcname] = useState("");
    const [cCategory, setcCategory] = useState("");
    const [cBrand, setcBrand] = useState("");
    const [cColor, setcColor] = useState("");
    const [cSize, setcSize] = useState("");
    const [cMaterial, setcMaterial] = useState("");
    const [cPrice, setcPrice] = useState("");
    const [cStock, setcStock] = useState("");
    const [cGender, setcGender] = useState("");
    const [cSeason, setcSeason] = useState("");
    const [cRegisterDate, setcRegisterDate] = useState("");

    useEffect(() => {
        apiClothesService.getClothesById(id,
            (data) => {
                setcCategory(data.ccategory);
                setcBrand(data.cbrand);
                setcColor(data.ccolor);
                setcSize(data.csize);
                setcMaterial(data.cmaterial);
                setcPrice(data.cprice);
                setcStock(data.cstock);
                setcGender(data.cgender);
                setcSeason(data.cseason);
                setcRegisterDate(data.cregisterDate);
            });
    }, [id]);

    const handleUpdate = () => {
        const updateCloth ={
            cid:id,
            cname:cName,
            ccategory:cCategory,
            cbrand:cBrand,
            ccolor:cColor,
            csize:cSize,
            cmaterial:cMaterial,
            cprice:cPrice,
            cstock:cStock,
            cgender:cGender,
            cseason:cSeason,
            cregisterDate:cRegisterDate
        };
        apiClothesService.updateClothes(updateCloth, "수정성공");
        navigate(-2);
    }
    return(
        <div>
            <h1>이름 수정하기</h1>
            <input
                type="text"
                placeholder="이름"
                value={cName}
                onChange={(e) => setcname(e.target.value)}
            />
            <button onClick={handleUpdate}>수정하기</button>
        </div>
    )
}

export default EditClothes;