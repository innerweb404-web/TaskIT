import React, { lazy, useEffect, useState, Suspense } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import { ClipLoader } from 'react-spinners'

const StatsPanel = lazy(() =>(
  import("./components/StatsPanel/StatsPanel")
))

const App = () => {
  const [showStats, setShowStats] = useState(false);
  

  useEffect(() => {
    const preloadStats = () =>
      import("./components/StatsPanel/StatsPanel");

      if ("requestIdleCallback" in window) {
        requestIdleCallback(preloadStats);
      } else {
        setTimeout(preloadStats, 2000);
      }
    }, []);

  return (
    <section className='container'>
      <Header />
      <main>
        <AddTodo />
        <div className="task-stats">
          <button className='btn statBtn' onClick={() => setShowStats(prev => !prev)}>
            {showStats ? 'Hide stats' : 'Show Stats'}
          </button>
          {showStats && (
            <Suspense fallback={<div><ClipLoader color='#fd758b' size={20}/></div>}>
              <StatsPanel />
            </Suspense>
          )}
        </div>
        <TodoList />
      </main>
    </section>
  )
}

export default App
