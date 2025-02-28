import classes from './RadioInput.module.css'

export default function RadioInput({name, value, isChecked, handleChange}) {
    return(
        <>
            <input type="radio" name={name} value={value} className={classes.input} checked={isChecked} onChange={handleChange} />
        </>
    )
}