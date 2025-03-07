import {useState} from "react";
import apiService from "./apiService";
import FormPostData from "./FormPostData";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const InsertPost = () => {
    /*
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("일반"); // 기본 카테고리 설정
    const [message, setMessage] = useState(null);
    const [err, setErrCallback] = useState(null);
     */

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        postTitle: "",
        postContent: "",
        thumbnail: "",
        postCategory: "",
        postStatus: "",
    })

    const inputPostField = [
        {id: "postTitle", label: "게시물 명", placeholder: "제목을 작성해 주세요"},
        {id: "postContent", label: "게시물 내용", placeholder: "내용을 작성해주세요"},
        {id: "thumbnail", label: "이미지", placeholder: "이미지를 삽입해주세요"},
        {id: "postCategory", label: "카테고리", placeholder: "카테고리를 작성해주세요"},
        {id: "postStatus", label: "상태", placeholder: "상태를 넣어주세요"}
    ]

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);
    }
    /*
    function handleSubmit() {
        const newPost = {
            userId: 1, // 실제 사용자 ID 필요 (예제에서는 1로 고정)
            //    postTitle:
            //    postContent:
            thumbnail: null, // 썸네일이 없으므로 기본값 null
            //    postCategory:
            viewCount: 0, // 새 글이므로 조회수 0
            likeCount: 0, // 좋아요 수 0
            postStatus: "공개", // 기본 상태 '공개'
            createdAt: new Date().toISOString(), // 현재 시간
            updatedAt: new Date().toISOString(), // 현재 시간
        };
        // 저장하기  기능 완성
        apiService.createPost(newPost, setMessage, setErrCallback);
    }
 */

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        console.log("폼 데이터 제출 전: ", JSON.stringify(formData, null, 2));

        axios
            .post("http://localhost:8080/api/posts", formData,
                {headers: {"Content-Type": "application/json"}})
            .then(
                (res) => {
                    alert("게시물 등록이 완료되었습니다.");
                    navigate("/posts");
                })
            .catch(
                (err) => {
                    alert("데이터를 등록할 수 없습니다.");
                    console.error("err: " + err);
                }
            )
    }
    return (
        <div className="col-6 mx-auto"> {/*row 한 가로줄 기준으로 12칸 중에서 6칸 차지하고 나머지 3칸을
         mx-auto 를 이용해서 왼쪽 오른쪽에 균등하게 배분
         row = 12
         왼쪽 = 3 가운데(폼데이터)= 6 오른쪽 = 3

         mx = 왼쪽 오른쪽
         my = 위쪽 아래쪽
         auto 가운데 자동 정렬
        */}
            {/*
            <h2>새 게시물 작성</h2>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

             카테고리 선택

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="일반">일반</option>
                <option value="공지사항">공지사항</option>
                <option value="질문">질문</option>
                <option value="후기">후기</option>
            </select>

            <button onClick={handleSubmit}>등록</button>
            {message && <p>{message}</p>} */}
            <form onSubmit={handleSubmit}>
                {inputPostField.map(
                    (field) => (
                        <FormPostData  key={field.id}
                                       {...field}  // field의 id, label, placeholder를 전달
                                       value={formData[field.id]} // formData에서 해당 id의 값을 전달
                                       handleChange={handleChange} // handleChange를 전달하여 input의 값을 변경
                        />
                    )
                )}
                <div className="d-grid mt-3">
                    <button className="btn btn-success btn-lg">
                        등록하기
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InsertPost;
