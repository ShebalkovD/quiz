import classes from './CreateForm.module.css'
import { useState, useCallback } from 'react'
import Input from '../Input/Input'
import RadioInput from '../RadioInput/RadioInput'
import Button from '../Button/Button'

export default function CreateForm({questionList, addQuestion, setFormState}) {
    const [radioValue, setRadioValue] = useState(1)
    const [quizQuestion, setQuizQuestion] = useState('')
    const [quizQuestionError, setQuizQuestionError] = useState(false)

    const [quizAnswer1, setQuizAnswer1] = useState('')
    const [quizAnswer1Error, setQuizAnswer1Error] = useState(false)

    const [quizAnswer2, setQuizAnswer2] = useState('')
    const [quizAnswer2Error, setQuizAnswer2Error] = useState(false)

    const [quizAnswer3, setQuizAnswer3] = useState('')
    const [quizAnswer3Error, setQuizAnswer3Error] = useState(false)

    const handleChange = (event) => {
        setRadioValue(event.target.value)
    }

    const handleInput = (event, setValue) => {
        setValue(event.target.value)
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
                hasError = true
                switch (key) {
                    case 'question':
                        setQuizQuestionError(true)
                        break;
                    case 'answer1':
                        setQuizAnswer1Error(true)
                        break;
                    case 'answer2':
                        setQuizAnswer2Error(true)
                        break;
                    case 'answer3':
                        setQuizAnswer3Error(true)
                        break;
                    default:
                        break;
                }
            }
        }
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
            addQuestion(newQuestion)
            clearInputs()
            setFormState(false)
        }

    })

    return(
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <Input 
                label="Текст вопроса" 
                inputName="question" 
                value={quizQuestion} 
                handleInput={(event) => {handleInput(event, setQuizQuestion)}}
                error={quizQuestionError}
                setError={setQuizQuestionError}
            />

            <div className={classes.form_text}>
                Введите ответы на вопрос и отметье верный
            </div>

            <div className={classes.wrapper}>
                <RadioInput 
                    handleChange={handleChange} 
                    name="correct" value="1" 
                    className={classes.radio} 
                    isChecked={radioValue == 1 ? true : false} 
                />
                <Input 
                    label="Ответ 1" 
                    inputName="answer1" 
                    value={quizAnswer1} 
                    handleInput={(event) => {handleInput(event, setQuizAnswer1)}}
                    error={quizAnswer1Error}
                    setError={setQuizAnswer1Error}
                />
            </div>
            <div className={classes.wrapper}>
                <RadioInput 
                    handleChange={handleChange} 
                    name="correct" 
                    value="2" 
                    className={classes.radio} 
                    isChecked={radioValue == 2 ? true : false}
                />
                <Input 
                    label="Ответ 2" 
                    inputName="answer2" 
                    value={quizAnswer2} 
                    handleInput={(event) => {handleInput(event, setQuizAnswer2)}}
                    error={quizAnswer2Error}
                    setError={setQuizAnswer2Error}
                />
            </div>
            <div className={classes.wrapper}>
                <RadioInput 
                    handleChange={handleChange} 
                    name="correct" 
                    value="3" 
                    className={classes.radio} 
                    isChecked={radioValue == 3 ? true : false}
                />
                <Input 
                    label="Ответ 3" 
                    inputName="answer3" 
                    value={quizAnswer3} 
                    handleInput={(event) => {handleInput(event, setQuizAnswer3)}}
                    error={quizAnswer3Error}
                    setError={setQuizAnswer3Error}
                />
            </div>

            <Button>Подтвердить</Button>
        </form>
    )
}