import React from 'react'
import { useGlobalContext } from '../Context'

export default function Favorites() {
  const { removeFromFavorites, favorites, selectMeal } = useGlobalContext()
  return (
    <section className='favorites'>
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMeal: title, strMealThumb: image } = item
            return <div key={idMeal} className='favorite-item'>
              <img src={image} className='favorites-img img' onClick={() => selectMeal(idMeal,true)} />
              <h6 className='title-btn' >{title}</h6>
              <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>Remove</button>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
