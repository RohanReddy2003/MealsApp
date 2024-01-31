import { useGlobalContext } from "../Context";
import { BiLike } from "react-icons/bi";

export default function Meals() {
  const {meals,loading,selectMeal,addToFavorites} = useGlobalContext();

  if (loading){
    return <section className="section-center">
        <h4>Loading....</h4>
    </section>
  }
  if (meals.length < 1){
    return <section className="section-center">
        <h4>No Meals matched your search term. Please try again.</h4>
    </section>
  }

  return (
    <section className="section-center">
        {meals.map((singleMeal)=>{
            const {idMeal, strMeal:title , strMealThumb: image, strCategory:category}= singleMeal
            return <article key={idMeal} className="single-meal">
                <img src={image} className="img" onClick={()=>selectMeal(idMeal)}/>
                <footer>
                    <h5>{title} - {category}</h5>
                    <button className="like-btn"onClick={()=>addToFavorites(idMeal)}><BiLike /></button>
                </footer>
            </article>
        })}
    </section>
  )
}
