import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';

class CreateStudent extends Component {
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
    onChange=(e)=>{
        console.log("on change ", e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e)=>{
        console.log("form data ", e.target);
        e.preventDefault();
        const payload = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            course: this.state.course,
            year: this.state.year
        }
        axios.post('http://localhost:8080/api/students/', payload).then(res=>{
            console.log("Student record added successfully ", res);
            this.setState({
                name: '',
                email: '',
                phone: '',
                course: '',
                year: ''
            })
        }).catch(console.log(" Error in creating a Record "));
    }
    render(){
        console.log(" state ", this.state);
        return(
            <div className='container' id='createStudent'>
                <div className='row'>
                    <h3>Create New Student Record</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='name' placeholder='Please enter student name' value={this.state.name} onChange={this.onChange}/>
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='email' placeholder='Please enter email' value={this.state.email} onChange={this.onChange}/>
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='phone' placeholder='Please enter phone number' value={this.state.phone} onChange={this.onChange} />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='course' placeholder='Please enter course name' value={this.state.course} onChange={this.onChange} />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='year' placeholder='Please enter year' value={this.state.year} onChange={this.onChange} />
                        </div>
                        <input type="submit" value="Add Student Record" className='btn btn-primary mt-4' />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateStudent;