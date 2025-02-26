import classes from './Game.module.css'

export default function Game({progress, currentQuestion, handleClick}) {
    return (
    <>
        <div className={classes.progressbar} style={{width: `${progress}%`}}></div>
        <p className={classes.question}>{currentQuestion.text}</p>
        <ul>
            {currentQuestion.answers.map(answer => (
                <li key={answer.id}>
                    <button className={classes.answer} onClick={() => handleClick(answer)}>{answer.name}</button>
                </li>
            ))}
        </ul>
    </>
    )
}