import { useState, createContext } from 'react'
import Game from './components/Game'
import './App.css'

export const Context = createContext<any>(null)

const levels = [1,2,3]

function App() {
  const [showArray, setShowArray] = useState<boolean>(false);
  const [gameLevel, setGameLevel] = useState<number>(1)

  return (
    <Context.Provider value={{key: 'Value'}}>
      <div className="App">
        <h2>Sudoku</h2>
        <div>
          <button onClick={() => setShowArray((prevState => !prevState ? !prevState : prevState))}>
            New Game
          </button>
          <select value={gameLevel} onChange={(event) => setGameLevel(Number(event.target.value))}>
            {levels.map(el => <option key={el}>{el}</option>)}
          </select>
        </div>
        {showArray && <Game level={gameLevel} />}
      </div>
    </Context.Provider>
  )
}

export default App
