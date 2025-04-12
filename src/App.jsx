
import './App.css'
import MoviesCard from './components/MoviesCard'

function App() {

  const movieNumber = 1;

  return (
    <>
    <MoviesCard movie={{title: "300" ,release_date: "2010"}}/>
    </>
  )
}

export default App
