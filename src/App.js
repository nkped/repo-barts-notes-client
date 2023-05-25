import { useState } from "react";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {

  const [ newItem, setNewItem ] = useState('')
  const [ items, setItems ] = useState( JSON.parse(localStorage.getItem('bartslist')) || [])

  const setAndSave = (newItems) => {
    setItems(newItems)
    localStorage.setItem('bartslist', JSON.stringify(newItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => id === item.id ? ({ ...item, checked: !item.checked }) : item )
    setAndSave(listItems)
  }

  const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setAndSave(listItems)
  }

  const addItem = (item) => {
    const id = items.length ? (items[items.length - 1].id + 1) : 1
    console.log(id)
    const myNewItem = { id, checked: false, item }
    console.log(myNewItem)
    const listItems = [ ...items, myNewItem ]
    console.log('logging listItems: ', listItems)
    setAndSave(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div className="App">
      <h1>Barts notes app</h1>
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <Content 
        items={items} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
         />

    </div>
  );
}

export default App;