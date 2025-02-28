import { useState } from 'react'
import classes from './Input.module.css'

export default function Input({label, inputName, defaultValue, value, handleInput}) {
    const [hasError, setHasError] = useState(false)
    const handleBlur = (event) => {
        if (event.target.value.length <= 0) {
            event.target.classList.add(classes.error)
            event.target.classList.remove(classes.filled)
            setHasError(true)
        }else {
            event.target.classList.add(classes.filled)
            event.target.classList.remove(classes.error)
            setHasError(false)
        } 
    }

    return(
        <>
        <label className={classes.labelwrapper}>
            <p className={classes.text}>
            {label} 
            {hasError && <span style={{color:'rgb(198, 0, 0)'}}> *</span>}
            </p>
            <input className={classes.input} type="text" name={inputName} defaultValue={defaultValue} value={value} onChange={handleInput} onBlur={handleBlur}/>   
        </label>
        </>
    )
} 