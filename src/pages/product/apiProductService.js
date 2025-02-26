
import axios, {get} from "axios";

const API_PRODUCT_URL = "http://localhost:8080/api/products";

const apiProductService = {
    getProduct:
        function (callback, errorCallback) {
            axios
                .get(API_PRODUCT_URL)
                .then( //백엔드 연결 성공
                    (res) => {
                       callback(res.data);
                    }
                )
                .catch( //백엔드 연결 실패
                    (err) => {
                        alert("백엔드에서 문제가 발생했습니다.");
                        errorCallback("제품목록 보기 실패");
                        console.error("err 발생한 문제를 개발자만 확인할 수 있도록 설정"+err);
                    });
        },
    getSuggestions:
        function (value, setSugs, setShow) {
            axios
                .get(`${API_PRODUCT_URL}/search?keyword=${value}`)
                .then( //연결 성공
                    (res) => {
                        const 제안리스트 = res.data
                        setSugs(제안리스트);
                        setShow(true);
                    }
                )
                .catch( //연결 실패
                    (err) => {
                        // console.log 일 경우에는
                        // function () 소 괄호 내부에 err 작성해야 하지만
                        // console.error 는 그럴 필요 없음
                        console.error("추천 검색어 동작 실패:" +err);
                        setSugs([]);
                    }
                );
        },

    getProductById:
        function (keyword, setProduct, err) {
            axios
                //.get(API_PRODUCT_URL+"/"+keyword)
                .get(`${API_PRODUCT_URL}/${keyword}`)
                .then( //백엔드와 연결 성공
                    (res) => {
                        if (res.data) { // 데이터가 1개이상 존재할 때
                            setProduct(res.data)
                        }
                    }
                )
                .catch( // 연결 실패
                    (err) => {
                        console.error("err code: "+err);
                    }
                )
        },

    getSearchProducts:
        function (keyword, setProducts) {
        axios
            .get(`${API_PRODUCT_URL}/search?${keyword}`)
                .then(
                    (res) => {
                        setProducts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log("검색실패" + err);
                        setProducts([]);
                    }
                )
        },
}



export default apiProductService;
