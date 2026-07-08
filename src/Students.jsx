import PropTypes from 'prop-types';

function Students(props){
    return(
        <div className="Students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}  </p>
            <p>Student: {props.isStudents ? "Yes" : "No"}</p>
        </div>
    );
}
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudents: PropTypes.bool
}
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudents: false
}
export default Students