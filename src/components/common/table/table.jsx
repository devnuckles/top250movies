import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ rows, columns }) => {
    return (
        <table className="table">
            <TableHeader columns={columns} />
            <TableBody rows={rows} columns={columns} />
        </table>
    );
};

export default Table;
