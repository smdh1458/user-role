import axios, {put} from "axios";


const CLOTH_API_URL = "http://localhost:8080/api/clothes";

/*
const 기능명칭 = {
1번기능:
    function() {
    },

2번기능:
    function() {
    },

3번기능:
    function() {
    },
}
export default 기능명칭;
외부 파일에서 기능명칭 안에 들어있는 기능을 사용하기 위해서는
기능명칭.1번기능();
와 같이 사용
*/
const apiClothesService = {
    getAllClothes:
        function (callback) {
            axios
                .get(CLOTH_API_URL)
                .then(
                    (res) => {
                        callback(res.data)
                    }
                )
                .catch(// 백엔드와 연결 실패했을 경우
                    // err 는 자동으로 생성되는 문제가 err 변수이름에
                    // 자동으로 담김
                    (err) => {
                        alert("백엔드에서 연결에 실패했습니다.")
                    }
                )
        },

    getClothesById:
        function (cid, callback) {
            axios
                .get(`${CLOTH_API_URL}/${cid}`)
                .then(
                    (res) => {
                        callback(res.data);
                    }
                )
                .catch(
                    (err) => {
                        alert("백엔드에서 에러가 발생했습니다.");
                    }
                )
        },

    insertClothes:
        function (clothes) {
            axios
                .post(CLOTH_API_URL, clothes, {
                    headers: {"Content-Type": "application/json"}
                })
                .then(
                    () => {
                        alert("추가 완료");
                    }
                )
                .catch(
                    () => {
                        alert("백엔드에서 오류가 났습니다.");
                    }
                )
        },

    updateClothes:
        function (clothesData, callback) {
        axios
            .put(CLOTH_API_URL, clothesData, {
                headers: {"Content-Type": "application/json"}
            })
                .then(
                    (res) => {
                        alert(callback);
                    }
                )
                .catch(
                    (err) => {
                        alert("백엔드에 오류가 발생했습니다.");
                    }
                )
        },

    deleteClothes:
        function (clothId) {
            axios
                .delete(`${CLOTH_API_URL}/${clothId}`)
                .then(
                    (res) => {
                        alert("삭제하였습니다.");
                    }
                )
                .catch(
                    (err) => {
                        alert("백엔드에서 컨트롤러 연결에 실패했습니다.");
                    }
                )
        }
}

export default apiClothesService;