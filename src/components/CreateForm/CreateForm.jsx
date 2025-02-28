import classes from './CreateForm.module.css'
import { useState } from 'react'
import Input from '../Input/Input'
import RadioInput from '../RadioInput/RadioInput'
import Button from '../Button/Button'

export default function CreateForm({handleSubmit, inputData, handleInput}) {
    const [radioValue, setRadioValue] = useState(1)
    const handleChange = (event) => {
        setRadioValue(event.target.value)
    }

    return(
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <Input label="Текст вопроса" inputName="question" value={inputData.question[0]} handleInput={(event) => {handleInput(event, inputData.question[1])}}/>

            <div className={classes.form_text}>
                Введите ответы на вопрос и отметье верный
            </div>

            <div className={classes.wrapper}>
                <RadioInput handleChange={handleChange} name="correct" value="1" className={classes.radio} isChecked={radioValue == 1 ? true : false} />
                <Input label="Ответ 1" inputName="answer1" value={inputData.answer1[0]} handleInput={(event) => {handleInput(event, inputData.answer1[1])}}/>
            </div>
            <div className={classes.wrapper}>
                <RadioInput handleChange={handleChange} name="correct" value="2" className={classes.radio} isChecked={radioValue == 2 ? true : false}/>
                <Input label="Ответ 2" inputName="answer2" value={inputData.answer2[0]} handleInput={(event) => {handleInput(event, inputData.answer2[1])}}/>
            </div>
            <div className={classes.wrapper}>
                <RadioInput handleChange={handleChange} name="correct" value="3" className={classes.radio} isChecked={radioValue == 3 ? true : false}/>
                <Input label="Ответ 3" inputName="answer3" value={inputData.answer3[0]} handleInput={(event) => {handleInput(event, inputData.answer3[1])}}/>
            </div>

            <Button >Подтвердить</Button>
        </form>
    )
}