import { useState, useCallback } from 'react'
import { Link } from 'react-router'
import classes from './CreateScreen.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CreateForm from '../CreateForm/CreateForm'

export default function CreateScreen() {

    const [quizName, setQuizName] = useState('Все сорта рябины...')
    const [createFormOpen, setCreateFormOpen] = useState(false)
    const [questionList, setQuestionList] = useState([])

    const handleNameInput = (event) => {
        setQuizName(event.target.value)
    } 
    const handleCreateForm = (value) => {
        setCreateFormOpen(value)
    }
    const addQuestion = (newQuestion) => {
        setQuestionList([...questionList, newQuestion])
    }
    const deleteQuestion = (id) => {
        setQuestionList(
            questionList.filter(question => question.id != id)
        )
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
                    <Button handleClick={() => handleCreateForm(true)}>Добавить вопрос</Button>
                </div>
                
                {createFormOpen && <CreateForm questionList={questionList} addQuestion={addQuestion} setFormState={handleCreateForm} />}

                {questionList.length > 0 && (
                    <div style={{marginTop: '4rem'}}>
                        <h1 className={classes.title}>Вопросы</h1>
                        <ul className={classes.list}>
                            {questionList.map((question, index) => (
                                <li key={index} className={classes.question}>
                                    <span>{question.id}. {question.text}</span>
                                    <div>
                                        <button className={`${classes.tr_btn} ${classes.edit}`}>Изменить</button>
                                        <button onClick={() => deleteQuestion(question.id)} className={`${classes.tr_btn} ${classes.delete}`}>Удалить</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
           </main>


        </div>
    )
}