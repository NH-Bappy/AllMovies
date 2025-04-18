import React from 'react';
import MoviesCard from '../components/MoviesCard';
import { useState,useEffect } from 'react';
import { searchMovies,getPopularMovies } from '../services/Api';
import "../css/Home.css"


const Home = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setloding] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("failel to load movies ...")
            }
            finally {
                setloding(false)
            }
        }
        loadPopularMovies()
    }, [])






    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

  return (
    <div className="home">

    <form onSubmit={handleSearch} className="search-form ">
        <input type="text" 
        placeholder="search for movies" 
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        
    <button type="submit" className="search-button">Search</button>
    </form>

    {error && <div className="error-message">{error}</div>}

    {loading ?
    ( <div className='loading'>Loading...</div> 
    ):(
    <div className="movies-grid">
        {movies.map((movie) =>( 
            <MoviesCard 
            movie={movie} 
            key={movie.id}/>
        )
            )}
    </div>
    )}
    </div>
  )
}
// movie.title.toLowerCase().startsWith(searchQuery) && 
export default Home