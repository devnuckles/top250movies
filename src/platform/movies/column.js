import { iconFill } from "../../resources/icons";

export const columns = [
    {
        label: "SL",
        path: "id",
        content: (row, column) => <span>{row[column.path]}</span>,
    },
    {
        label: "Poster",
        path: "image",
        content: (row, column) => (
            <span>
                <img src={row[column.path]} alt={row[column.label]} />
            </span>
        ),
    },
    {
        label: "Movie Name",
        path: "fullTitle",
        content: (row, column) => <span>{row[column.path]}</span>,
    },
    {
        label: "Rating",
        path: "imDbRating",
        content: (row, column) => <span>{row[column.path]}</span>,
    },
    {
        label: "Total Review",
        path: "imDbRatingCount",
        content: (row, column) => <span>{row[column.path]}</span>,
    },
    {
        label: "Your Review",
        path: "yourReview",
        content: (row, column) => <span> {iconFill} </span>,
    },
];
