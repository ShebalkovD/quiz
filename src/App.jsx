import { useState } from 'react'
import Game from './components/Game/Game'
import Result from './components/Result/Result'
import StartScreen from './components/StartScreen/StartScreen'
import './index.css'

function App() {
    const questionList = [
        {
            id: 0,
            text: 'Кто съел колобка?',
            answers: [
                {id:1, name:'Волк', isCorrect: false},
                {id:2, name:'Лиса', isCorrect: true},
                {id:3, name:'Медведь', isCorrect: false}
            ]
        },

        {
            id: 1,
            text: 'Что больше?',
            answers: [
                {id:1, name:'см', isCorrect: false},
                {id:2, name:'мм', isCorrect: false},
                {id:3, name:'дм', isCorrect: true}
            ]
        },
        
        {
            id: 2,
            text: 'Кто тут лишний?',
            answers: [
                {id:1, name:'Огурец', isCorrect: true},
                {id:2, name:'Апельсин', isCorrect: false},
                {id:3, name:'Яблоко', isCorrect: false}
            ], 
        }
    ]

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

    return (
    <div className="container">
        {/* <div className="quiz">
            {!gameIsOver && <Game progress={progress} currentQuestion={currentQuestion} handleClick={handleClick} />}
            {gameIsOver && <Result counter={counter} handleClick={restart} />}
        </div> */}
        <StartScreen />
    </div>
    )
}

export default App
