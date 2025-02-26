import styles from './Game.module.css'

export default function Game({progress, currentQuestion, handleClick}) {
    return (
    <>
        <div className={styles.progressbar} style={{width: `${progress}%`}}></div>
        <p className={styles.question}>{currentQuestion.text}</p>
        <ul>
            {currentQuestion.answers.map(answer => (
                <li key={answer.id}>
                    <button className={styles.answer} onClick={() => handleClick(answer)}>{answer.name}</button>
                </li>
            ))}
        </ul>
    </>
    )
}