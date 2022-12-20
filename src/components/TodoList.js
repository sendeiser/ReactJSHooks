import React from 'react'
import Todo from './Todo'






const TodoList = ({ todo, todoDelete, todoCambioComplete,setTodoEdit }) => {




    return (
        <>
            <h1 className='text-end display-4'>Soy TodoList</h1>


            {

                todo.length === 0
                ?(
                    <div className="alert alert-primary">
                        No hay tareas. Por favor agrega una :D
                    </div>
                )
                : (
                
                    todo.map(todo =>
                        <Todo
                            info={todo}
                            key={todo.id}
                            todoDelete={todoDelete}
                            todoCambioComplete={todoCambioComplete}
                            setTodoEdit={setTodoEdit}
                        />
                    )
                )
            }
            
            

        </>
    );
}

export default TodoList