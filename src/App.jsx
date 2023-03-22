//  Firebase
//==========
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

import {useState} from 'react'
import {nanoid} from 'nanoid';
import Item from './components/item.jsx';
import './css/App.css'

/*
 Todo: 
   - add buttons that add or subtract how of each item to get
   - add a check box to each li item and when checked cross the li items
    from the lis
   - create a button that removes all items from the list 
 DONE - create a function that adds the current input's value to the item list
 DONE - create a button that removes or crosses the items once purchased
 */



function App() {
  //  Firebase 
  //==========
  const appSettings = {
    databaseURL: 'https://playground-e9327-default-rtdb.firebaseio.com/'
  }
  const app = initializeApp(appSettings)
  const database = getDatabase(app)
  const shoppingCartDB = ref(database, 'shoppingList')
  
  //  State
  //=======
  const [itemList, setSetItemList] = useState([])
  const [currentItem, setCurrentItem] = useState({
    id: '',
    name: '',
  })
  
  //  Functions
  //===========
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
      push(shoppingCartDB, currentItem)
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

        <div className="container">
          <input
            className="input--field"
            placeholder="add item to the list"
            name="input"
            value={currentItem.name}
            onChange={(e) => newItem(e)}
          />
          <i className="fa-solid fa-cart-shopping fa-lg icon"></i>
        </div>
        
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
