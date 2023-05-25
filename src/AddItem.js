import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label></label>
        <input
            type='text' 
            placeholder='add new item...' 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
        <button>+</button>
        </form>
  )
}

export default AddItem