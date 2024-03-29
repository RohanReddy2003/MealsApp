
import './App.css'
import Favorites from './Components/Favorites'
import Meals from './Components/Meals'
import Modal from './Components/Modal'
import Search from './Components/Search'
import { useGlobalContext } from './Context'

function App() {
  const {showModal,favorites} = useGlobalContext()
  return (
    <>
      <Search/>
      {favorites.length > 0 && <Favorites/>}
      <Meals/>
      {showModal && <Modal />}
    </>
  )
}

export default App
