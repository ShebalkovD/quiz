import classes from './PickScreen.module.css'
import { Link } from 'react-router'

export default function PickScreen() {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Link to='/'>Назад</Link>
            </header>
            <main>
                <h1 className={classes.title}>Выберите викторину</h1>
                <ul>
                    <li className={classes.quiz_item}>
                        <h2>Название</h2>
                        <p>
                            Кол-во вопросов: 10
                        </p>
                    </li>
                </ul>
            </main>
        </div>
    )
}