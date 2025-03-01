import { useState, useEffect } from 'react'
import classes from './Input.module.css'

export default function Input({label, inputName, defaultValue, value, handleInput, error, setError}) {
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        setHasError(error)
    }, [error])

    const handleBlur = (event) => {
        if (event.target.value.length <= 0) {
            setError(true)
            setHasError(true)
        }else {
            setError(false)
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
            <input 
                className={`${classes.input} ${hasError ? classes.error : null}`} 
                type="text" 
                name={inputName} 
                defaultValue={defaultValue} 
                value={value} 
                onChange={handleInput} 
                onBlur={handleBlur}
            />   
        </label>
        </>
    )
} 