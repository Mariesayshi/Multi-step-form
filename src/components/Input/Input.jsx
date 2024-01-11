import classes from "./Input.module.css"
const Input = ({ labelText, id, placeholder, type }) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={classes.input} type={type} id={id} placeholder={placeholder} />
        </>
    )
}

export default Input;