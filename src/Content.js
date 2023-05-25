import React from 'react'
import ItemList from './ItemList'


const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className='main'>
        { items.length ?
        <ItemList
            items={items}             
            handleCheck={handleCheck} 
            handleDelete={handleDelete} 
            />
            : <p style={{color: 'red'}}>List is empty...</p>
        }
    </main>
  )
}

export default Content