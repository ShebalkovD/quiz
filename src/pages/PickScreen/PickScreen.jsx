import classes from './PickScreen.module.css'
import DeleteButton from '../../components/DeleteButton/DeleteButton'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const getQuizList = () => {
    const quizList = JSON.parse(window.localStorage.getItem('quizList'))
    return quizList
}

export default function PickScreen() {
    const [quizList, setQuizList] = useState(getQuizList())
    const deleteQuiz = (id) => {
        setQuizList(
            quizList.filter(quiz => quiz.id != id)
        )
    }

    useEffect(() => {
        setQuizList(
            getQuizList()
        )
    }, [])

    useEffect(() => {
        window.localStorage.setItem('quizList', JSON.stringify(quizList))
    }, [quizList])

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Link to='/'>Назад</Link>
            </header>
            <main>
                <h1 className={classes.title}>Выберите викторину</h1>
                

                {quizList.length > 0 ? (
                    <ul>
                        {quizList.map(quiz => (
                            <li className={classes.quiz_item} key={quiz.id}>
                                <Link to='/quiz' className={classes.quiz_item_link}>
                                    <h2>{quiz.name}</h2>
                                    <p>
                                        Кол-во вопросов: {quiz.questions.length}
                                    </p>
                                </Link>
                                <div className={classes.quiz_btn_wrapper}>
                                    <DeleteButton handleClick={() => {deleteQuiz(quiz.id)}} />
                                </div>
                            </li>)
                        )}
                    
                </ul>
                ):(
                    <div>
                        <p className={classes.no_quiz}>Нет ни одной викторины</p>
                        <Link to="/create" className={classes.btn}>Добавить</Link>
                    </div>
                )}
            </main>
        </div>
    )
}