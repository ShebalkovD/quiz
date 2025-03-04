import { Routes, Route } from 'react-router'

import Quiz from './components/Quiz/Quiz'
import StartScreen from './pages/StartScreen/StartScreen'
import CreateScreen from './pages/CreateScreen/CreateScreen'
import PickScreen from './pages/PickScreen/PickScreen'
import './index.css'

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/pick" element={<PickScreen />} />
                <Route path="/create" element={<CreateScreen />} />
            </Routes>
        </div>
    )
}

export default App
