import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  const addTask = (title, desc, date, isFavorite) => {
    setTasks([...tasks, { title, id: uuid(), desc, date, isFavorite }])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const clearList = () => {
    setTasks([])
  }

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id)

    setEditItem(item)
  }

  const editTask = (title, id, desc, date, isFavorite) => {
    const newTasks = tasks.map((task) => (task.id === id ? { title, id, desc, date, isFavorite } : task))

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
