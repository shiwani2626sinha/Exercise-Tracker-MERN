import React from 'react';
import Navbar from "./components/Navbar.component"
import ExerciseList from "./components/ExerciseList.component"
import EditExercise from "./components/EditExercise.component"
import CreateExercise from "./components/CreateExercise.component"
import CreateUser from "./components/CreateUser.component"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      </div>
       <br/>
       <Route path = "/" exact component = {ExerciseList} />
       <Route path = "/edit/:id" exact component = {EditExercise} />
       <Route path = "/create" exact component = {CreateExercise} />
       <Route path = "/user" exact component = {CreateUser} />
    </Router>
   
  );
}

export default App;
