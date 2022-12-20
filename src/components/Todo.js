import React from 'react'

const Todo = ({ info, todoDelete, todoCambioComplete,setTodoEdit }) => {

    return (
        <div className="card mt-2 bg-dark text-light ">
            <div className="card-body">
                <h3 className="card-tittle text-end">
                    {info.title}
                    <button
                        onClick={() => todoCambioComplete(info.id)}
                        className={`btn btn-sm ${info.completed ? 'btn-outline-success' : 'btn-success'} ms-2 fw-bold`}>
                        {info.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className='card-text text-end'>
                    {info.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end ">
                    <button
                        className="btn btn-sm btn-outline-primary fw-bold me-2"
                        onClick={() => setTodoEdit(info)}
                    >Editar
                    </button>
                    <button
                        onClick={() => todoDelete(info.id)}
                        className="btn btn-sm btn-outline-danger fw-bold">
                        Eliminar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Todo