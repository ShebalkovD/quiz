import { useState } from 'react'
import { Link } from 'react-router'
import classes from './CreateScreen.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CreateForm from '../CreateForm/CreateForm'

export default function CreateScreen() {

    const [quizName, setQuizName] = useState('Все сорта рябины...')
    const [questionIsEditing, setQuestionIsEditing] = useState(false)

    const handleNameInput = (event) => {
        setQuizName(event.target.value)
    } 

    const handleAddButton = () => {
        setQuestionIsEditing(true)
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

                {questionIsEditing && <CreateForm />}
           </main>
        </div>
    )
}