import { Routes, Route } from 'react-router'
import { CSSTransition } from 'react-transition-group'

import Quiz from './pages/Quiz/Quiz'
import StartScreen from './pages/StartScreen/StartScreen'
import CreateScreen from './pages/CreateScreen/CreateScreen'
import PickScreen from './pages/PickScreen/PickScreen'
import './index.css'

const routes = [
    {path: '/', element: StartScreen},
    {path: '/quiz', element: Quiz},
    {path: '/pick', element: PickScreen},
    {path: '/create', element: CreateScreen}
]

function App() {
    return (
        <div className="container">
            <Routes>
                {routes.map(route => (
                    <Route path={route.path} element={<route.element />} key={route.path} />
                ))}
            </Routes>
        </div>
    )
}

export default App
