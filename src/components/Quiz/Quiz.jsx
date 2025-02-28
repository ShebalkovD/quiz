import Result from '../Result/Result'
import Game from '../Game/Game'
import { useState } from 'react'

const questionList = [
    {
        id: 0,
        text: 'Кто съел колобка?',
        answers: [
            {id:1, value:'Волк', isCorrect: false},
            {id:2, value:'Лиса', isCorrect: true},
            {id:3, value:'Медведь', isCorrect: false}
        ]
    },

    {
        id: 1,
        text: 'Что больше?',
        answers: [
            {id:1, value:'см', isCorrect: false},
            {id:2, value:'мм', isCorrect: false},
            {id:3, value:'дм', isCorrect: true}
        ]
    },
    
    {
        id: 2,
        text: 'Кто тут лишний?',
        answers: [
            {id:1, value:'Огурец', isCorrect: true},
            {id:2, value:'Апельсин', isCorrect: false},
            {id:3, value:'Яблоко', isCorrect: false}
        ], 
    }
]

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(questionList[0])
    const [progress, setProgress] = useState(100 / questionList.length * 0.1)
    const [counter, setCounter] = useState(0)
    const [gameIsOver, setGameIsOver] = useState(false)

    const handleClick = (answer) => {
        if (answer.isCorrect) {
            setCounter(counter + 1)
        }
        let nextQuestionId = currentQuestion.id + 1
        if (nextQuestionId < questionList.length) {
            setCurrentQuestion(questionList[nextQuestionId])
            let newProgress = 100 / questionList.length * (currentQuestion.id + 1)
            setProgress(newProgress)
        }else {
            setGameIsOver(true)
        }
    }

    const restart = () => {
        setCurrentQuestion(questionList[0])
        setCounter(0)
        setProgress(100 / questionList.length * 0.1)
        setGameIsOver(false)
    }

    return(
        <div className="quiz">
            {!gameIsOver && <Game progress={progress} currentQuestion={currentQuestion} handleClick={handleClick} />}
            {gameIsOver && <Result counter={counter} handleClick={restart} />}
        </div>
    )
}