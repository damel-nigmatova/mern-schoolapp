import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsList from './components/StudentsList';
import CreateStudent from './components/CreateStudent';
import StudentDetails from './components/StudentDetails';
import UpdateStudent from './components/UpdateStudent';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<StudentsList />}></Route>
        <Route path='/create-student' element={<CreateStudent />}></Route>
        <Route path='/show-student/:id' element={<StudentDetails />}></Route>
        <Route path='/update-student/:id' element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
