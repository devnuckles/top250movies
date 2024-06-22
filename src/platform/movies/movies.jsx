import { useEffect, useState } from "react";
import Table from "../../components/common/table/table";
import fetchMovies from "../../resources/fetchMovies";
import { columns } from "./column";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieList = fetchMovies();
        setMovies(movieList.items);
    }, []);

    return (
        <>
            <Table rows={movies} columns={columns} />
        </>
    );
};

export default Movies;
