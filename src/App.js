import React, { useState,useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {
    id: 1,
    title: 'TODO #1',
    description: 'Descripcion del todo #1',
    completed: false
  },
  {
    id: 2,
    title: 'TODO #2',
    description: 'Descripcion del todo #2',
    completed: true
  }
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {

  const [todos, setTodos] = useState(localTodos || initialTodos);

  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));

  },[todos])




  const todoDelete = (todoId) => {



    if(todoEdit && todoId === todoEdit.id)
    {
      setTodoEdit(null);
    }

    const changeTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(changeTodos);

  }

  const todoCambioComplete = (todoId) => {
  /*   const changeTodos = todos.map(todo => {

      const todoEdit= {
        ...todo,
        completed:!todo.completed
      }

      if(todo.id === todoId){
        return todoEdit
      }
      else
      {
        return todo
      }
    } ) */

    /* const changeTodos = todos.map(todo => {

      todo.id === todoId ? 
      {...todo, completed: !todo.completed} 
      : todo
    }) */

    const changeTodos = todos.map( todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
    
    setTodos(changeTodos);
  }

  const todoAdd = (todo) => {

    const newTodo = {
      id:Date.now(),
      ...todo,
      completed: false
    }


    const changedTodos = [
      newTodo,
      ...todos
    ]

    setTodos(changedTodos);
  }

  const todoUpdate = (todoEdit) => {

    const changedTodos = todos.map( todo => (
      todo.id === todoEdit.id
      ? todoEdit
      : todo
    )
    )

    setTodos(changedTodos);

  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8 border border-3 border-primary'>
          <TodoList
            todo={todos}
            todoDelete={todoDelete}
            todoCambioComplete={todoCambioComplete}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className='col-4 border border-3 border-primary'>
          <TodoForm 
          todoAdd={todoAdd}
          todoEdit={todoEdit}
          todoUpdate={todoUpdate}
          setTodoEdit={setTodoEdit}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
