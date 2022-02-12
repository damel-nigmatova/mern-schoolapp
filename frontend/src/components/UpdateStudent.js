import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UpdateStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            course: '',
            year: ''
        };
    }

    componentDidMount() {
        console.log(" windows location ", window.location);
        console.log(" print  ", window.location.pathname);

        var url = window.location.pathname;
        var id = url.split('/update-student/')[1];

        console.log(" id ", id);
        axios.get('http://localhost:8080/api/students/' + id).then((res) => {
            console.log(" res", res.data);
            this.setState({ 
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                course: res.data.course,
                year: res.data.year
             });
        }).catch(err => console.log(" Error ", err));
    }
    
    onChange = e => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
        
        var url = window.location.pathname;
        var id = url.split('/update-student/')[1];
    
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            course: this.state.course,
            year: this.state.year
        }
        axios.put('http://localhost:8080/api/students/' + id, data)
            .then(res => {
                console.log('succes', res);
                window.location.href = 'http://localhost:3000';
            })
            .catch(err => console.log("Error ", err));
    }
    
    render() {
        console.log(" state ", this.state);
    return (
        <div className='container' id='updateStudent'>
            <h3>Update Student Record</h3>
            <div className='row'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label type="text" for="name">Student Name: </label>
                        <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label type="text" for="email">Email Address: </label>
                        <input type='text' className='form-control' name='email' value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label type="text" for="phone">Phone Number: </label>
                        <input type='text' className='form-control' name='phone' value={this.state.phone} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label type="text" for="course">Course</label>
                        <input type='text' className='form-control' name='course' value={this.state.course} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label type="text" for="year">published_date</label>
                        <input type='text' className='form-control' name='year' value={this.state.year} onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn btn-success"> Update Student Record</button>
                </form>
            </div>
        </div>
            );
        }
    }


export default UpdateStudent;