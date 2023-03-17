import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from './features/todoSlice'

function App() {
  const count = useSelector((state) => state);
 const dispatch=  useDispatch()
  const [input,setInput] =useState('')
  return (
    <>
    <div className='flex justify-center my-10'>
        <input className='border-2 border-black p-2 m-1' type="text" placeholder='Enter Task' onChange={e => setInput(e.target
        .value)} />
      <button className='border-2 border-black p-2' disabled={input === ""} onClick={() => dispatch(addTodo(input))}>ADD TASK</button>
    </div>
      <div>{ count}</div>
    </>
  )
}

export default App
