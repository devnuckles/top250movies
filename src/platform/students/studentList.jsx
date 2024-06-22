import Table from "../../components/common/table/table";
import { columns } from "./columns";
import { rows } from "./rows";

const StudentList = () => {
    return (
        <>
            <Table rows={rows} columns={columns} />
        </>
    );
};

export default StudentList;
