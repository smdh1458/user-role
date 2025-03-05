
const FormInput = ({id, type, label, placeholder, value, onChange}) => {

    return(
        <div>
            <div className="form-floating mb-3">
                <input className="form-control"
                       type={type}
                       name={id}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       required/>
                <label htmlFor={id}>
                    {label} :
                </label>
                <div className="invalid-feedback">
                    {label}은 필수로 입력해야 합니다.
                </div>
            </div>
        </div>
    )
}


export default FormInput;