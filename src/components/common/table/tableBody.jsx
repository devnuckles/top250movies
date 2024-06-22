const TableBody = ({ rows, columns }) => {
    return (
        <tbody>
            {rows.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={column.path}>{column.content(row, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
