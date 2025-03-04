import img from '../../assets/edit.svg'
import classes from './EditButton.module.css'

export default function EditButton({handleClick}) {
    return (
        <button onClick={handleClick} className={classes.btn}>
            <img src={img} alt="edit" className={classes.img} />
        </button>
    )
}