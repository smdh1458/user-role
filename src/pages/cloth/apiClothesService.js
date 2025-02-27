import axios, {put} from "axios";


const CLOTH_API_URL = "http://localhost:8080/api/clothes";

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
                .catch(
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
        function (clothId, callback) {
            axios
                .delete(`${CLOTH_API_URL}/${clothId}`)
                .then(
                    (res) => {
                        alert(callback);
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