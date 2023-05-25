import { useState } from "react";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {

  const [ newItem, setNewItem ] = useState('')
  const [ items, setItems ] = useState([
    { id: 1, checked: false, item: 'Ride my skateboard'},
    { id: 2, checked: false, item: 'Tell Homer to suck my butt'},
    { id: 3, checked: true, item: 'Treehouse with Millhouse'}
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) => id === item.id ? { ...item, checked: !item.checked } : item )
    setItems(listItems)
  }

  const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setItems(listItems)
  }

  const addItem = (item) => {
    const id = items[items.length - 1].id + 1
    console.log(id)
    const myNewItem = { id, checked: false, item }
    console.log(myNewItem)
    const listItems = [ ...items, myNewItem ]
    console.log(listItems)
    setItems(listItems)
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
