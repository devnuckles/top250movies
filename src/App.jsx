import { useEffect, useState } from "react";
import { icon, iconFill } from "./resources/icons";
import fetchMovies from "./resources/fetchMovies";

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieList = fetchMovies();
        setMovies(movieList.items);
    }, []);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Poster</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Total Review</th>
                        <th scope="col">Your Review</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>
                                <img src={movie.image} alt={movie.fullTitle} />
                            </td>
                            <td>{movie.fullTitle}</td>
                            <td>{movie.imDbRating}</td>
                            <td>{movie.imDbRatingCount}</td>
                            <td>{iconFill}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
