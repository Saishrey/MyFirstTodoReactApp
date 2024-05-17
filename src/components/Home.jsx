import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='flex flex-row gap-10 justify-center h-[100vh] items-center'>
            <Link to='/MyFirstTodoReactApp/todo'>Todo</Link>
            <Link to='/MyFirstTodoReactApp/products'>Products</Link>
            <Link to='/MyFirstTodoReactApp/searchbox'>Searchbox</Link>
            <Link to='/MyFirstTodoReactApp/test'>Test</Link>
        </div>
    )
}
