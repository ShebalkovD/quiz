export default function Game({progress, currentQuestion, handleClick}) {
    return (
    <>
        <div className="progressbar" style={{width: `${progress}%`}}></div>
        <p className="question">{currentQuestion.text}</p>
        <ul>
            {currentQuestion.answers.map(answer => (
                <li key={answer.id}>
                    <button className="answer" onClick={() => handleClick(answer)}>{answer.name}</button>
                </li>
            ))}
        </ul>
    </>
    )
}