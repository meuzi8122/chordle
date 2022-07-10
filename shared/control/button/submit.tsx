const SubmitButton: React.FC<SubmitButtonProps> = ({ label, disabled }) => {
    return (
        <p className="control">
            <button type="submit" className="button" disabled={disabled}>{label}</button>
        </p>
    )
}

export default SubmitButton;