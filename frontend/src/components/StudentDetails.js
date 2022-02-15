import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: []
        };
    }
    componentDidMount() {

        console.log("windows location ", window.location);
        console.log("print  ", window.location.pathname);

        var url = window.location.pathname;
        var id = url.split('/show-student/')[1];

        console.log(" id ", id);
        axios.get('http://localhost:8080/api/students/' + id).then((res) => {
            console.log(" res", res.data);
            this.setState({ student: res.data });
        }).catch(err => console.log(" Error ", err));
    }

    deleteOnClick(id){
        console.log("Delete", id);
        axios.delete('http://localhost:8080/api/students/' + id)
            .then(res=>{
                this.props.history.push('/');
                window.location.href = 'http://localhost:3000';
            })
            .catch(err=>{
                console.log("Error while deleting", err);
            })
            this.props.history.push('/');
    }

    render() {
        const student = this.state.student;
        console.log("Student ", student);

        return (
            <div className="container" id='studentDetails'>
                <div className="row">
                    <h2>Student Details </h2>
                </div>

                <div className="row">
                    <table className="table table-striped">
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
                            <tr>
                                <td className='name-link'>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.course}</td>
                                <td>{student.year} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='row btns'>
                    <div>
                        <button className='btn btn-danger' onClick={this.deleteOnClick.bind(this, student._id)}>Delete This Record</button>
                        <Link to={`/update-student/${student._id}`} className="btn btn-primary">Update This Record</Link>
                    </div>
                </div>
            </div>
        );
    }

}
export default StudentDetails;