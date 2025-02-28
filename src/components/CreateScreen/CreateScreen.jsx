import { useState } from 'react'
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

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        let newQuestion = {}
        newQuestion.id = questionList.length + 1
        newQuestion.text = data.get('question')
        newQuestion.answers = [
            {id: 1, value: data.get('answer1'), getId() {return this.id}},
            {id: 2, value: data.get('answer2'), getId() {return this.id}},
            {id: 3, value: data.get('answer3'), getId() {return this.id}}
        ]
        newQuestion.answers.forEach(answer => {
            answer.isCorrect == data.get('correct')
        })
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

                {questionIsEditing && <CreateForm handleSubmit={handleSubmit} />}
                
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