import { useState, useCallback } from 'react'
import { Link } from 'react-router'
import classes from './CreateScreen.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CreateForm from '../CreateForm/CreateForm'

export default function CreateScreen() {

    const [quizName, setQuizName] = useState('Все сорта рябины...')
    const [questionIsEditing, setQuestionIsEditing] = useState(false)
    const [questionList, setQuestionList] = useState([])

    const handleNameInput = (event) => {
        setQuizName(event.target.value)
    } 
    const handleAddButton = () => {
        setQuestionIsEditing(true)
    }
    const addQuestion = (newQuestion) => {
        setQuestionList([...questionList, newQuestion])
    }

    return(
        <div className={classes.container}>
           <header className={classes.header}>
                <Link to="/">Назад</Link>
           </header>

           <main>
                <h1 className={classes.title}>Создать викторину</h1>

                <div className={classes.form_block_wrapper}>
                    <Input label="Название викторины" inputName="name" handleInput={handleNameInput} value={quizName}/>
                    <Button handleClick={handleAddButton}>Добавить вопрос</Button>
                </div>
                
                {questionIsEditing && <CreateForm questionList={questionList} addQuestion={addQuestion} />}

                {questionList.length > 0 && (
                    <div>
                        <h1 className={classes.title}>Вопросы</h1>
                        <ul className={classes.list}>
                            {questionList.map(question => (
                                <li key={question.id} className={classes.question}>
                                    {question.id}. {question.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
           </main>


        </div>
    )
}