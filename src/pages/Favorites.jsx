import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MoviesCard from '../components/MoviesCard'

const Favorites = () => {
    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => ( 
                        <MoviesCard 
                            movie={movie} 
                            key={movie.id}
                        />
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="favorites-empty">
                <h2>No favorite movies yet</h2>
                <p>Start adding movies to your favorites and they will appear here!</p>
            </div>
        )
    }
}

export default Favorites