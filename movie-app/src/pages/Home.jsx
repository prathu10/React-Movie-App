import MovieCard from "../components/MovieCard"
import { useState } from "react";



function Home(){
    const [searchQuery, setSearchQuery] = useState("");
        //[name of the state, function to update the state]



    const movies =[
        {id:1, title: 'The Night Agent', release_date: "2020"},
        {id:2, title: 'Recruit', release_date: "2021"},
        {id:3, title: 'Money Heist', release_date: "2022"},
        {id:4, title: 'Stranger Things', release_date: "2023"},
    ];
      
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)

    }

     
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home