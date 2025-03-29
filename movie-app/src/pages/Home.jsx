import MovieCard from "../components/MovieCard"
import { useState } from "react";



function Home(){
    const [searchQuery, setSearchQuery] = useState("");



    const movies =[
        {id:1, title: 'Movie1', release_date: "2020"},
        {id:2, title: 'Movie2', release_date: "2021"},
        {id:3, title: 'Movie3', release_date: "2022"},
        {id:4, title: 'Movie4', release_date: "2023"},
    ];
      
    const handleSearch = () => {

    }

     
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"></input>
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home