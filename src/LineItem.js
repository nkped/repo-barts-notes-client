import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
        <li className='item'>
        <input            
            type='checkbox' 
            checked={item.checked} 
            onChange={() => handleCheck(item.id)} />
        <label>{item.item}</label>
        <FaTrashAlt 
            onClick={() => handleDelete(item.id)} />
        </li>
  )
}

export default LineItem