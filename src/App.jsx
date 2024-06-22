import Movies from "./platform/movies/movies";
import StudentList from "./platform/students/studentList";

const App = () => {
    return (
        <div className="container">
            <StudentList />
            <Movies />
        </div>
    );
};

export default App;
