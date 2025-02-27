import { Routes, Route } from 'react-router'

import Quiz from './components/Quiz/Quiz'
import StartScreen from './components/StartScreen/StartScreen'
import './index.css'

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    )
}

export default App
