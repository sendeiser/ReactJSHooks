import React, { useState, useEffect } from 'react'

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

  const initialFormValues = {
    title: '',
    description: ''
  }

  const [FormValues, setFormValues] = useState(initialFormValues)
  const { title, description } = FormValues;

  const [error, setError] = useState(null);

  const [successmessage, setSuccessmessage] = useState(null)

  useEffect(() => {

    if (todoEdit) {
      setFormValues(todoEdit);
    }
    else {
      setFormValues(initialFormValues);
    }

  }, [todoEdit])


  const handleInputChange = (e) => {

    const changedFormValues = {
      ...FormValues,
      [e.target.name]: e.target.value
    }

    setFormValues(changedFormValues);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (title.trim() === '') { //trim elimina los espacios del string
      setError('Debes indicar un titulo')
      return;
    }
    if (description.trim() === '') {
      setError('Debes inidicar una descripcion')
      return;
    }


    if (todoEdit) {
      //Actualizando
      todoUpdate(FormValues);
      setSuccessmessage('Actualizado con exito!');
    }
    else {
      //agregar tarea
      todoAdd(FormValues);
      setSuccessmessage('Agregado con exito!');
    }


    setFormValues(initialFormValues); //se limpia el formulario a la forma inicial del objeto

    setTimeout(() => {
      setSuccessmessage(null)
    }, 3000);

    setError(null);
  }

  return (
    <>
      <h2 className='text-center display-5 text-white bg-dark'>{todoEdit ? 'Actualizar Tarea' : 'Nueva Tarea'}</h2>
      {
        todoEdit &&

      <button
      onClick={() => setTodoEdit(null)}
      className="btn btn-sm btn-warning mb-2"
      >
       Cancelar edicion
      </button>
      }

      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Titulo'
          className="form-control"
          value={title}
          name='title'
          onChange={handleInputChange}
        />

        <textarea
          placeholder='Descripcion'
          className="form-control mt-2"
          value={description}
          name='description'
          onChange={handleInputChange}
        >
        </textarea>

        <button
          className="btn btn-primary btn-block mt-2">
          {todoEdit ? 'editar tarea' : 'agregar tarea'}
        </button>
      </form>

      {
        error &&
        (
          <div className="alert alert-danger mt-2">
            {error}
          </div>
        )
      }
      {
        successmessage &&
        (
          <div className="alert alert-success mt-2">
            {successmessage}
          </div>
        )
      }

    </>
  )
}

export default TodoForm
