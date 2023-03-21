import { useState } from 'react'
import './css/App.css'

function App() {
  const [text, setText] = useState('')
  const [list, setList]= useState([])
  
  function handleText(e) {
    const {value} = e.target
    setText(value)
  }
  
  function addItem() {
    console.log("item added!")
  }
  
  return (
    <div className="App">
      <h1 className="tittle">Shopping List</h1>
      <input 
          className="input--field"
          placeholder="add item to the list"
          name="input"
          value={text}
          onChange={handleText}
      />
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      
      <button
        className="button--add"
        onClick={addItem}
      >
        Add tem
      </button>

    </div>
  )
}

export default App
