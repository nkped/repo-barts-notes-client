import { useState } from "react";
import Content from "./Content";

function App() {

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



  return (
    <div className="App">
      <h1>Barts notes app</h1>
      <Content 
        items={items} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
         />

    </div>
  );
}

export default App;
