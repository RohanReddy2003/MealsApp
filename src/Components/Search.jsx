import React, { useState } from 'react'
import { useGlobalContext } from '../Context'

export default function Search() {
  const [text, setText] = useState('');

  const {setSearchTerm,fetchRandomMeal} = useGlobalContext();

  const handleChange = (e)=>{
    setText(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text){
      setSearchTerm(text);
    }
  }
  const handleRandomMeal=()=>{
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='type favorite meal' className="form-input" value={text} onChange={handleChange}/>
      <button type='submit' className="btn">Search</button>
      <button type='b' className="btn btn-hipster" onClick={handleRandomMeal}>Surprise me!</button>
      </form>
    </header>
  )
}
