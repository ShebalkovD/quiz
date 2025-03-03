import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import classes from './CreateScreen.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import CreateForm from '../CreateForm/CreateForm'

export default function CreateScreen() {

    const [quizName, setQuizName] = useState('Все сорта рябины...')
    const [createFormOpen, setCreateFormOpen] = useState(false)
    const [editFormOpen, setEditFormOpen] = useState(false)
    const [questionList, setQuestionList] = useState([])
    const [questionToEdit, setQuestionToEdit] = useState({})
    const [quizNameError, setQuizNameError] = useState(false)

    const navigate = useNavigate()

    const handleNameInput = (event) => {
        setQuizName(event.target.value)
    } 
    const handleCreateForm = (value) => {
        setCreateFormOpen(value)
        setEditFormOpen(false)
    }
    const handleEditForm = (value) => {
        setEditFormOpen(value)
        setCreateFormOpen(false)
    }
    const addQuestion = (newQuestion) => {
        setQuestionList([...questionList, newQuestion])
    }
    const deleteQuestion = (id) => {
        setQuestionList(
            questionList.filter(question => question.id != id)
        )
    }
    const handleEditQuestion = (id) => {
        handleEditForm(true)
        setQuestionToEdit(...questionList.filter(question => question.id == id))
    }
    const editQuestion = (editedQuestion) => {
        setQuestionList(
            questionList.map(question => {
                if (question.id == editedQuestion.id) {
                    question.text = editedQuestion.text
                    question.answers[0].value = editedQuestion.answers[0].value
                    question.answers[0].isCorrect = editedQuestion.answers[0].isCorrect
                    question.answers[1].value = editedQuestion.answers[1].value
                    question.answers[1].isCorrect = editedQuestion.answers[1].isCorrect
                    question.answers[2].value = editedQuestion.answers[2].value
                    question.answers[2].isCorrect = editedQuestion.answers[2].isCorrect

                    question.correct = editedQuestion.correct
                }

                return question
            })
        )
        setQuestionToEdit({})
    }
    
    const handleCreateQuiz = () => {
        const quiz = {}
        let quizList = window.localStorage.getItem('quizList')
        if (quizList == null) {
            quiz.id = 1 
            quizList = []
        }else {
            quizList = JSON.parse(quizList)
            quiz.id = quizList.length + 1
        }
        quiz.name = quizName
        quiz.questions = questionList
        quizList.push(quiz)
        window.localStorage.setItem('quizList', JSON.stringify(quizList))
        navigate('/')
    }

    return(
        <div className={classes.container}>
           <header className={classes.header}>
                <Link to="/">Назад</Link>
                <Button 
                    disabledCondition={questionList.length <= 0 || quizName.length <= 0}
                    handleClick={handleCreateQuiz}
                >
                    Создать
                </Button>
           </header>

           <main>
                <h1 className={classes.title}>Создать викторину</h1>

                <div className={classes.form_block_wrapper}>
                    <Input 
                        label="Название викторины" 
                        inputName="name" 
                        handleInput={handleNameInput} 
                        value={quizName}
                        setError={setQuizNameError}
                    />
                    <Button handleClick={() => handleCreateForm(true)}>Добавить вопрос</Button>
                </div>
                
                {createFormOpen && <CreateForm questionList={questionList} addQuestion={addQuestion} setFormState={handleCreateForm} mode="create"/>}
                {editFormOpen && <CreateForm  setFormState={handleEditForm} editQuestion={editQuestion} questionToEdit={questionToEdit} mode="edit"/>}

                {questionList.length > 0 && (
                    <div style={{marginTop: '4rem'}}>
                        <h1 className={classes.title}>Вопросы</h1>
                        <ul className={classes.list}>
                            {questionList.map((question, index) => (
                                <li key={question.id} className={classes.question}>
                                    <span>{index + 1}. {question.text}</span>
                                    <div>
                                        <button onClick={() => handleEditQuestion(question.id)} className={`${classes.tr_btn} ${classes.edit}`}>Изменить</button>
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