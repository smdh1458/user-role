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
            {/*
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

            <button onClick={handleAdd}>추가하기</button> */}
            <div className="container px-5">
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                            <i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">새로운 옷 추가하기</h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <form id="contactForm">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text"
                                           placeholder="Enter your name..."
                                           value={cName}
                                           onChange={(e) => setcname(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="name">이름</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="category" type="text"
                                           placeholder="Enter your name..."
                                           value={cCategory}
                                           onChange={(e) => setcCategory(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="category">카테고리</label>
                                    <div className="invalid-feedback" data-sb-feedback="category:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="brand" type="text"
                                           placeholder="Enter your name..."
                                           value={cBrand}
                                           onChange={(e) => setcBrand(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="brand">브랜드</label>
                                    <div className="invalid-feedback" data-sb-feedback="brand:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="color" type="text"
                                           placeholder="Enter your name..."
                                           value={cColor}
                                           onChange={(e) => setcColor(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="color">색상</label>
                                    <div className="invalid-feedback" data-sb-feedback="color:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="size" type="text"
                                           placeholder="Enter your name..."
                                           value={cSize}
                                           onChange={(e) => setcSize(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="size">사이즈</label>
                                    <div className="invalid-feedback" data-sb-feedback="size:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="material" type="text"
                                           placeholder="Enter your name..."
                                           value={cMaterial}
                                           onChange={(e) => setcMaterial(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="material">재질</label>
                                    <div className="invalid-feedback" data-sb-feedback="material:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="price" type="number"
                                           placeholder="Enter your name..."
                                           value={cPrice}
                                           onChange={(e) => setcPrice(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="price">가격</label>
                                    <div className="invalid-feedback" data-sb-feedback="price:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="stock" type="number"
                                           placeholder="Enter your name..."
                                           value={cStock}
                                           onChange={(e) => setcStock(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="stock">수량</label>
                                    <div className="invalid-feedback" data-sb-feedback="stock:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="gender" type="text"
                                           placeholder="Enter your name..."
                                           value={cGender}
                                           onChange={(e) => setcGender(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="gender">성별</label>
                                    <div className="invalid-feedback" data-sb-feedback="gender:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="season" type="text"
                                           placeholder="Enter your name..."
                                           value={cSeason}
                                           onChange={(e) => setcSeason(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="season">계절</label>
                                    <div className="invalid-feedback" data-sb-feedback="season:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="registerDate" type="text"
                                           placeholder="Enter your name..."
                                           value={cRegisterDate}
                                           onChange={(e) => setcRegisterDate(e.target.value)}
                                           data-sb-validations="required"/>
                                    <label htmlFor="registerDate">날짜</label>
                                    <div className="invalid-feedback" data-sb-feedback="registerDate:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" id="submitButton"
                                            type="button" onClick={handleAdd}>추가하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClothes;