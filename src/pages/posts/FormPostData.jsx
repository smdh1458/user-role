
const FormPostData = ({id, label, placeholder, value, handleChange}) => {

    return(
        <div className="formPostData-container">
            <label htmlFor={id}>
                {label}:
            </label>
            <input className="form-control"
                   name={id}
                   type="text"
                   placeholder={placeholder}
                   value={value}
                   onChange={handleChange} // 이벤트 핸들러가 제대로 연결되었는지 확인
                   required
            />
        </div>
    )
}

export default FormPostData;