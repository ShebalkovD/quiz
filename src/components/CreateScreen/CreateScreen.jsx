import { useState, useCallback } from 'react'
import { Link } from 'react-router'
import classes from './CreateScreen.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CreateForm from '../CreateForm/CreateForm'

export default function CreateScreen() {

    const [quizName, setQuizName] = useState('Все сорта рябины...')
    const [quizQuestion, setQuizQuestion] = useState('')
    const [quizAnswer1, setQuizAnswer1] = useState('')
    const [quizAnswer2, setQuizAnswer2] = useState('')
    const [quizAnswer3, setQuizAnswer3] = useState('')
    const [questionIsEditing, setQuestionIsEditing] = useState(false)
    const [questionList, setQuestionList] = useState([])
    const inputData = {
        question: [quizQuestion, setQuizQuestion],
        answer1: [quizAnswer1, setQuizAnswer1],
        answer2: [quizAnswer2, setQuizAnswer2],
        answer3: [quizAnswer3, setQuizAnswer3]
    }
    const handleNameInput = (event) => {
        setQuizName(event.target.value)
    } 
    const handleInput = (event, setValue) => {
        setValue(event.target.value)
    }
    const handleAddButton = () => {
        setQuestionIsEditing(true)
    }
    const clearInputs = () => {
        setQuizQuestion('')
        setQuizAnswer1('')
        setQuizAnswer2('')
        setQuizAnswer3('')
    }
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        let hasError = false
        let form_data = new FormData(event.target)
        let data = {}
        for (const [key, value] of form_data) {
            data[key] = value
            if (value.length <= 0) {
                console.log('ошибка')
                hasError = true
            }
        }

        console.log(data)

        if (!hasError) {
            let newQuestion = {}
            newQuestion.id = questionList.length + 1
            newQuestion.text = data.question
            newQuestion.answers = [
                {id: 1, value: data.answer1, getId() {return this.id}},
                {id: 2, value: data.answer2, getId() {return this.id}},
                {id: 3, value: data.answer3, getId() {return this.id}}
            ]
            newQuestion.answers.forEach(answer => {
                answer.isCorrect == data.correct
            })
            setQuestionList([...questionList, newQuestion])
            clearInputs()
        }
    })

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
                
                {questionIsEditing && <CreateForm handleSubmit={handleSubmit} inputData={inputData} handleInput={handleInput} />}

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