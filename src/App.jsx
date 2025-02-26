import { useState } from 'react'
import Game from './components/Game'
import './index.css'

function App() {
    const questionList = [
        {
            id: 0,
            text: 'Кто съел колобка?',
            answers: [
                {id:1, name:'Волк'},
                {id:2, name:'Лиса'},
                {id:3, name:'Медведь'}
            ], 
            correct: 2
        },

        {
            id: 1,
            text: 'Что больше?',
            answers: [
                {id:1, name:'см'},
                {id:2, name:'мм'},
                {id:3, name:'дм'}
            ], 
            correct: 3
        },
        
        {
            id: 2,
            text: 'Кто тут лишний?',
            answers: [
                {id:1, name:'Огурец'},
                {id:2, name:'Апельсин'},
                {id:3, name:'Яблоко'}
            ], 
            correct: 1
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(questionList[0])
    const [progress, setProgress] = useState(100 / questionList.length * 0.1)
    const [counter, setCounter] = useState(0)
    const [gameIsOver, setGameIsOver] = useState(false)

    const handleClick = (answer) => {
        answer.id == currentQuestion.correct ? setCounter(counter + 1) : console.log('неверно')

        let nextQuestionId = currentQuestion.id + 1
        if (nextQuestionId < questionList.length) {
            setCurrentQuestion(questionList[nextQuestionId])
            setProgress(100 / questionList.length * (currentQuestion.id + 1))
        }else {
            setGameIsOver(true)
        }
    }

    return (
    <div className="container">
        <div className="quiz">
            {!gameIsOver && <Game progress={progress} currentQuestion={currentQuestion} handleClick={handleClick}/>}
            {gameIsOver && <div>верных ответов: {counter}</div>}
        </div>
    </div>
    )
}

export default App
