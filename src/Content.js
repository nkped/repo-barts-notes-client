import React from 'react'
import ItemList from './ItemList'


const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className='main'>
        <ItemList
            items={items}             
            handleCheck={handleCheck} 
            handleDelete={handleDelete} 
            />
    </main>
  )
}

export default Content