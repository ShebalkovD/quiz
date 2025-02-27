import classes from './Input.module.css'

export default function Input({label, inputName, defaultValue, value, handleInput}) {
    return(
        <>
        <label className={classes.labelwrapper}>
            <p className={classes.text}>{label}</p>
            <input className={classes.input} type="text" name={inputName} defaultValue={defaultValue} value={value} onChange={handleInput}/>   
        </label>
        </>
    )
} 