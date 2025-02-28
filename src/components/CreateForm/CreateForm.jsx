import classes from './CreateForm.module.css'
import Input from '../Input/Input'
import RadioInput from '../RadioInput/RadioInput'
import Button from '../Button/Button'

export default function CreateForm({handleSubmit}) {

    return(
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <Input label="Текст вопроса" inputName="question"/>

            <div className={classes.form_text}>
                Введите ответы на вопрос и отметье верный
            </div>

            <div className={classes.wrapper}>
                <RadioInput name="correct" value="1" className={classes.radio} checked="checked" />
                <Input label="Ответ 1" inputName="answer1"/>
            </div>
            <div className={classes.wrapper}>
                <RadioInput name="correct" value="2" className={classes.radio}/>
                <Input label="Ответ 2" inputName="answer2"/>
            </div>
            <div className={classes.wrapper}>
                <RadioInput name="correct" value="3" className={classes.radio}/>
                <Input label="Ответ 3" inputName="answer2"/>
            </div>

            <Button >Подтвердить</Button>
        </form>
    )
}