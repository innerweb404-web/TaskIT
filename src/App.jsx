import React from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {

  return (
    <div className='container'>
      <div className="header">
        <h2>
          TaskIT
        </h2>
      </div>
      <div className="task">
        <AddTodo/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App;
