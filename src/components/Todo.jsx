import React, { useState, useRef } from 'react'
import { todoItems as t } from '../data/todo_data'
import { MdDeleteForever } from "react-icons/md";
import Task from './Task';


export default function Todo() {
  const [todoItems, setTodoItems] = useState(t)
  const [item, setItem] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)
  const titleRef = useRef()
  const descRef = useRef()

  // const [todoItem, setTodoItems] = useState({})

  function addTask(event) {
    event.preventDefault()

    console.log('In add')

    const formdata = new FormData(event.currentTarget)
    const data = Object.fromEntries(formdata)

    setTodoItems((previousState) => {
      const newTask = [
        ...previousState,
        {
          title: data.title,
          description: data.description,
        }
      ]

      return newTask
    })

    event.currentTarget.reset()
  }

  function updateTask(event) {
    event.preventDefault()


    const formdata = new FormData(event.currentTarget)
    const data = Object.fromEntries(formdata)

    const newArr = todoItems.map(todo => {
      if (todo.title === item.title && todo.description === item.description) {
        return {
          title: data.title,
          description: data.description,
        }
      }

      return todo;
    })

    setTodoItems(newArr)


    event.currentTarget.reset()
    setIsUpdating(false)
  }

  function handleDelete(title) {
    setTodoItems(previousState => previousState.filter(task => task.title !== title))
  }

  function handleDoubleClick({ title, description }) {
    setIsUpdating(true)
    titleRef.current.value = title
    descRef.current.value = description

    setItem({
      title,
      description
    })
  }

  return (
    <div>
      <h1 className='text-[3rem] font-bold text-blue-700'>Todo Tasks</h1>
      <div >
        <form onSubmit={isUpdating ? updateTask : addTask} className='flex flex-col gap-1'>
          <input ref={titleRef} required type='text' placeholder='Title' className='border p-2 rounded' name='title' />
          <input ref={descRef} required type='text' placeholder='Description' className='border p-2 rounded' name='description' />
          <button className={`${isUpdating ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-green-400 hover:bg-green-300'} p-2 rounded  active:bg-red-500`}>{isUpdating ? 'Update' : 'Add task'}</button>
        </form>
      </div>
      <h1 className='my-2'>Double tap on task to update</h1>
      <ul>
        {todoItems && todoItems.map((item, index) => (
          <Task item={item} handleDoubleClick={handleDoubleClick} handleDelete={handleDelete} key={index}/>
        )
        )}
      </ul>
    </div >
  )
}



