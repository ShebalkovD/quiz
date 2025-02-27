import classes from './RadioInput.module.css'

export default function RadioInput({name, value}) {
    return(
        <>
            <input type="radio" name={name} value={value} className={classes.input}/>
        </>
    )
}