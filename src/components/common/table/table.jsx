import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ items }) => {
    return (
        <table className="table">
            <TableHeader />
            <TableBody items={items} />
        </table>
    );
};

export default Table;
