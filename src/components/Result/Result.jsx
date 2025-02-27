import classes from './Result.module.css'
import Button from '../Button/Button'

export default function Result({counter, handleClick}) {
    return (
        <div>
            <h2 className={classes.result}>Верных ответов: {counter}</h2>
            <Button handleClick={handleClick}>Заново</Button>
        </div>
    )
}