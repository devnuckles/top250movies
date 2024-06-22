import { useEffect, useState } from "react";
import Table from "../../components/common/table/table";
import fetchMovies from "../../resources/fetchMovies";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieList = fetchMovies();
        setMovies(movieList.items);
    }, []);

    return (
        <>
            <Table items={movies} />
        </>
    );
};

export default Movies;
