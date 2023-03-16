import { useState } from 'react'

function App() {

  const [input,setInput] =useState('')
  return (
    <div className='flex justify-center my-10'>
      <form className=''>
        <input className='border-2 border-black p-2 m-1' type="text" placeholder='Enter Task' onChange={e => setInput(e.target
        .value)} />
        <button className='border-2 border-black p-2' disabled={input===""}>ADD TASK</button>
      </form>
    </div>
  )
}

export default App
