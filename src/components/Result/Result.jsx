import classes from './Result.module.css'
import Button from '../Button/Button'
import { Link } from "react-router"

export default function Result({counter, handleClick}) {
    return (
        <div>
            <h2 className={classes.result}>Верных ответов: {counter}</h2>
            <div className={classes.btn_wrapper}>
                <Link to="/" className={classes.btn}>Назад</Link>
                <Button handleClick={handleClick}>Заново</Button>
            </div>
        </div>
    )
}