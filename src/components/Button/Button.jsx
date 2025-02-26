import classes from './Button.module.css'

export default function Button({children}) {
    return (
        <button className={classes.btn}>
            {children}
        </button>
    )
}