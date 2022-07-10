const Input: React.FC<InputProps> = ({ type = "text", placeholder, register }) => {
    return (
        <p className="control">
            <input type={type} placeholder={placeholder} className="input" {...register} />
        </p>
    )
}

export default Input;