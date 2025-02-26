import classes from './Result.module.css'
import Button from '../Button/Button'

export default function Result({counter}) {
    return (
        <div>
            <h2 className={classes.result}>Верных ответов: {counter}</h2>
            <Button>Заново</Button>
        </div>
    )
}