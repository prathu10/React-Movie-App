import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'



function Home(){
    const [searchQuery, setSearchQuery] = useState("");
        //[name of the state, function to update the state]
    const [movies, setMovies] = useState([])
//common practice when loading something from API, SET UP TWO PIECES OF STATE: A) TO STORE THE "LOADING STATE", B) TO STORE ANY POTENTIAL ERROR

    const [error, setError] = useState(null)
    const [loading, setloading] = useState(true)
  
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setloading(false)
            }
        }
        loadPopularMovies()
    }, [])   //[] --> dependency array- whatever we put inside it, check it after every single rerender and if its changed, we will run the use effect. if we have nothing inside, we will just run one time

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        // if (loading) return

        setloading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to search movies..")

        } finally {
            setloading(false)

        }
    };

     
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div> 
        ) : (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>        
    )}          
    </div>
    );
}

export default Home