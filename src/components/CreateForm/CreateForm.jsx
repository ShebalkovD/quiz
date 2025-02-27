import classes from './CreateForm.module.css'
import Input from '../Input/Input'
import RadioInput from '../RadioInput/RadioInput'
import Button from '../Button/Button'

export default function CreateForm() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.answer.value)
    }

    return(
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <Input label="Текст вопроса" />

            <div className={classes.form_text}>
                Введите ответы на вопрос и отметье верный
            </div>

            <div className={classes.wrapper}>
                <RadioInput name="answer" value="1" className={classes.radio} checked="checked" />
                <Input label="Ответ 1" />
            </div>
            <div className={classes.wrapper}>
                <RadioInput name="answer" value="2" className={classes.radio}/>
                <Input label="Ответ 2" />
            </div>
            <div className={classes.wrapper}>
                <RadioInput name="answer" value="3" className={classes.radio}/>
                <Input label="Ответ 3" />
            </div>

            <Button >Подтвердить</Button>
        </form>
    )
}