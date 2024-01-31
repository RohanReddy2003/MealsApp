import React from 'react'
import { useGlobalContext } from '../Context'

export default function Modal() {
  const {selectedMeal,closeModal}=useGlobalContext()
  const {strMealThumb:image,strMeal:title,strInstructions:text,strSource:source}= selectedMeal
  return (
        <aside className='modal-overlay'>
          <div className="modal-container">
            <img src={image} alt={title} className='img modal-img'/>
            <div className="modal-content">
              <h4>{title}</h4>
              <p>Cooking Instructions:</p>
              <p>{text}</p>
              <a href={source} target='_blank'>Source</a>
            </div>
            <button onClick={closeModal} className='btn btn-hipster close-btn'>close</button>
          </div>
        </aside>
  )
}
