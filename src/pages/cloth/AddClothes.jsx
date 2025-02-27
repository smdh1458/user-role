import {useState} from "react";
import apiClothesService from "./apiClothesService";
import {useNavigate} from "react-router-dom";


const AddClothes = () => {
    const navigate = useNavigate();
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

    const handleAdd = () => {
        const AddList = {
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
        console.log(AddList);
        apiClothesService.insertClothes(AddList);
        navigate(-1);
    }

    return(
        <div>
            <h1>새로운 옷 추가하기</h1>
            <input
                type="text"
                placeholder="이름"
                value={cName}
                onChange={(e) => setcname(e.target.value)}
            />

            <input
                type="text"
                placeholder="카테고리"
                value={cCategory}
                onChange={(e) => setcCategory(e.target.value)}
            />

            <input
                type="text"
                placeholder="브랜드"
                value={cBrand}
                onChange={(e) => setcBrand(e.target.value)}
            />

            <input
                type="text"
                placeholder="색상"
                value={cColor}
                onChange={(e) => setcColor(e.target.value)}
            />

            <input
                type="text"
                placeholder="사이즈"
                value={cSize}
                onChange={(e) => setcSize(e.target.value)}
            />


            <input
                type="text"
                placeholder="재질"
                value={cMaterial}
                onChange={(e) => setcMaterial(e.target.value)}
            />

            <input
                type="number"
                placeholder="가격"
                value={cPrice}
                onChange={(e) => setcPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="수량"
                value={cStock}
                onChange={(e) => setcStock(e.target.value)}
            />

            <input
                type="text"
                placeholder="성별"
                value={cGender}
                onChange={(e) => setcGender(e.target.value)}
            />

            <input
                type="text"
                placeholder="계절"
                value={cSeason}
                onChange={(e) => setcSeason(e.target.value)}
            />

            <input
                type="text"
                placeholder="날짜"
                value={cRegisterDate}
                onChange={(e) => setcRegisterDate(e.target.value)}
            />

            <button onClick={handleAdd}>추가하기</button>
        </div>
    )
}

export default AddClothes;