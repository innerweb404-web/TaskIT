import React, { lazy, useState, Suspense } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css'

const StatsPanel = lazy(() =>(
  import("./components/StatsPanel")
))

const App = () => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className='container'>

      <div className="header">
        <h2>
          TaskIT
        </h2>

        
      </div>
      <div className="task">
        <AddTodo/>
      <div className="task-stats">
        <button className='btn' onClick={() => setShowStats(true)}>
          Show Stats
        </button>
        {showStats && (
          <Suspense fallback={<div>Loading stats...</div>}>
            <StatsPanel />
          </Suspense>
        )}
      </div>
        <TodoList/>
      </div>
    </div>
  )
}

export default App;
