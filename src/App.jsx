import {useState} from 'react'
import {nanoid} from 'nanoid';
import './css/App.css'
import Item from './components/item.jsx';

/*
 Todo: 
   - add buttons that add or subtract how of each item to get 
 DONE - create a function that adds the current input's value to the item list
 DONE - create a button that removes or crosses the items once purchased
 */

function App() {
  const [itemList, setSetItemList] = useState([])
  const [currentItem, setCurrentItem] = useState({
    id: '',
    name: '',
  })

  function newItem(e) {
    setCurrentItem({
      id: nanoid(),
      name: e.target.value,
    })
  }
  
  function addItem() {
    if (currentItem.name !== '') {
      setSetItemList(prevState => [currentItem, ...prevState])
      setCurrentItem({ di: '', name: '',})
    }
  }
 
  const allItems = itemList.map(item =>
      <Item 
          key={item.id} 
          id={item.id}
          item={item.name} 
          remove={removeItem}
      />,
  )

  function removeItem(id) {
    setSetItemList(prevState => prevState.filter(item => item.id !== id ))
  }
  
  
  return (
      <div className="App">
        <h1 className="title">Shopping List</h1>
        <input
            className="input--field"
            placeholder="add item to the list"
            name="input"
            value={currentItem.name}
            onChange={(e) => newItem(e)}
        />
        <ul>
          {allItems}
        </ul>

        <button
            className="button--add"
            onClick={addItem}
        >
          Add Item
        </button>

      </div>
  )
}

export default App
