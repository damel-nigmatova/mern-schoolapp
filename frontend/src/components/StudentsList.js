import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import StudentRecord from './StudentRecord';
import '../App.css';

class StudentsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/students').then((res) => {
            this.setState({ students: res.data });
        }).catch(err => console.log('Error in componentDidMount', err));
    }
    render() {
        const students = this.state.students;
        var studentsList;
        
        if(!students) {
            console.log('No Students')
        } else {
            studentsList = students.map((student, i) =>                  
                <StudentRecord student={student} key={i} />
            );
        
        }
        return (
            <>
            <div className='btn-bar'>
                <Link to="/create-student" className="btn btn-outline-warning m-3">Add Student Record</Link>
            </div>
            <div className='container' id='studentsList'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Selected Course</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            studentsList
                        }
                </tbody>
                </table>
                </div>
            </>
        )
    }
}
export default StudentsList;