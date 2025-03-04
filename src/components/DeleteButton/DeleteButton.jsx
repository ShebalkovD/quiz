import img from '../../assets/delete.svg'
import classes from './DeleteButton.module.css'

export default function DeleteButton({handleClick}) {
    return (
        <button onClick={handleClick} className={classes.btn}>
            <img src={img} alt="edit" className={classes.img} />
        </button>
    )
}