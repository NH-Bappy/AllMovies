import "./css/App.css";
import Home from './pages/Home'
import {Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from './Navbar'



function App() {



  return (
    <MovieProvider>
      <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
