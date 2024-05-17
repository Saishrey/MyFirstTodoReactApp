import React from 'react'
import { MdDeleteForever } from "react-icons/md";


export default function Task({item, handleDoubleClick, handleDelete}) {
    return (
        <li>
            <div className="flex flex-row justify-center items-center my-3">
                <div className="bg-blue-400 rounded mr-1 w-full p-1" onDoubleClick={() => handleDoubleClick(item)}>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                </div>

                <button onClick={() => handleDelete(item.title)} className='bg-red-600  p-5 rounded border hover:bg-red-500 active:bg-pink-600'>
                    <MdDeleteForever color='white' />
                </button>
            </div>
        </li>
    )
}
