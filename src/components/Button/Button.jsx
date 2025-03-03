import classes from './Button.module.css'

export default function Button({children, handleClick, disabledCondition}) {
    return (
        <button className={classes.btn} onClick={handleClick} disabled={disabledCondition}>
            {children}
        </button>
    )
}