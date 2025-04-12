import React from 'react'
import MoviesCard from '../src/components/MoviesCard'
import { useState } from 'react'


const Home = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const movies = [
        {id:1 ,title: "john wick", release_date: "2010"},
        {id:2 ,title: "john wick 2", release_date: "2011"},
        {id:3 ,title: "john wick 3", release_date: "2015"},
        {id:4 ,title: "john wick 4", release_date: "2020"},
    ]

    const handleSearch = () => {
        alert(searchQuery)
    }

  return (
    <div className="">

    <form onSubmit={handleSearch} className="">
        <input type="text" 
        placeholder="search for movies" 
        className=""
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        
    <button type="submit" className=''>Search</button>
    </form>


    <div className="">
        {movies.map((movie) => (
            <MoviesCard 
            movie={movie} 
            key={movie.id}/>
        ))}
    </div>
    </div>
  )
}

export default Home