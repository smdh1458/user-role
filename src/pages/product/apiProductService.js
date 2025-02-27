
import axios, {get} from "axios";

const API_PRODUCT_URL = "http://localhost:8080/api/products";


/*
apiProductService.js:27  Uncaught (in promise) TypeError: errCallback is not a function
    at apiProductService.js:27:1

    errCallback -> 함수가 아니면 문제가 발생
    err 의 경우 매개변수 이름으로 전달받아서 작성 XX


    AI 학습의 도움을 받을 경우

    기능명칭:
            function (callback, errCallback) {
                //메인기능명칭을 호출할 경우 수행할 기능 작성
            }

            ==> 여기서 errCallback 의 경우 백엔드에서 문제가 생겼을 때
                해결해야할 문제
                매개변수 명칭으로 받아오지 않음 XXX

    바른 예제
       기능명칭:
            function (callback) {
                //메인기능명칭을 호출할 경우 수행할 기능 작성
            }


*/
const apiProductService = {
    getProduct:
        function (callback) {
            axios
                .get(API_PRODUCT_URL)
                .then( //백엔드 연결 성공
                    (res) => {
                        console.log("data:" + res.data);
                       callback(res.data);
                    }
                )
                .catch( //백엔드 연결 실패
                    (err) => {
                        alert("백엔드에서 문제가 발생했습니다.");
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
