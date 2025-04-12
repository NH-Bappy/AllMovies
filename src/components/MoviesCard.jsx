import React from 'react'
import { FaHeart } from "react-icons/fa";


const MoviesCard = ({movie}) => {



    function onFavoriteClick() {
      alert("clicked")
    }

  return (
    <div className="">
        <div className="">
            <img src={movie.url} alt={movie.title} />
            <div className="">
                <button className="" onClick={onFavoriteClick}>
                <FaHeart />
                </button>
            </div>
        </div>

        <div className="">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MoviesCard