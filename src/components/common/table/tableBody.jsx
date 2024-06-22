import { iconFill } from "../../../resources/icons";

const TableBody = ({ items }) => {
    return (
        <tbody>
            {items.map((movie) => (
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
    );
};

export default TableBody;
