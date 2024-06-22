export const columns = [
    {
        label: "Image",
        path: "image",
        content: (row, column) => (
            <span>
                <img
                    width="110px"
                    src={row[column.path]}
                    alt={row[column.name]}
                />
            </span>
        ),
    },
    {
        label: "Name",
        path: "name",
        content: (row, column) => <span> {row[column.path]} </span>,
    },
    {
        label: "Class",
        path: "class",
        content: (row, column) => <span> {row[column.path]} </span>,
    },
    {
        label: "Roll",
        path: "roll",
        content: (row, column) => <span> {row[column.path]} </span>,
    },
    {
        label: "Activities",
        path: "activities",
        content: (row, column) => <span> {row[column.path]} </span>,
    },
];
