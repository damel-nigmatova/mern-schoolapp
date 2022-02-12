import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const StudentRecord = (props) => {
    console.log("Personal student details", props);
    
    return (
            <>
            <tr>
            <td><Link to={`/show-student/${props.student._id}`}>{props.student.name}</Link></td>
            <td>{props.student.email}</td>
            <td>{props.student.phone}</td>
            <td>{props.student.course}</td>
            <td>{props.student.year} </td>
            </tr>
            </>
    )
}
export default StudentRecord;