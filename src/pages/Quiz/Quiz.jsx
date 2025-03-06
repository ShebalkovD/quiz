import Result from '../../components/Result/Result'
import Game from '../../components/Game/Game'
import { useState } from 'react'


export default function Quiz() {
    const currentQuiz = JSON.parse(window.localStorage.getItem('currentQuiz'))
    let questionList = [...currentQuiz.questions]
    const [currentQuestion, setCurrentQuestion] = useState(questionList[0])
    const [progress, setProgress] = useState(100 / questionList.length * 0.1)
    const [counter, setCounter] = useState(0)
    const [gameIsOver, setGameIsOver] = useState(false)
    
    const handleClick = (answer) => {
        if (answer.isCorrect) {
            setCounter(counter + 1)
        }
        let nextQuestionId = currentQuestion.id + 1
        if (nextQuestionId <= questionList.length) {
            setCurrentQuestion(questionList[nextQuestionId - 1])
            let newProgress = 100 / questionList.length * (currentQuestion.id)
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
        <div className="quiz page">
            {!gameIsOver && <Game progress={progress} currentQuestion={currentQuestion} handleClick={handleClick} />}
            {gameIsOver && <Result counter={counter} handleClick={restart} />}
        </div>
    )
}