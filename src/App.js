import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {

  constructor(){
    super();
    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) =>{//sets the current task in state to whatever the user types in the input field
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) =>{
    e.preventDefault(); //prevent refreshing of the form after submission
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),//adds the tast in the input field to the task array
      task: "",
    });
  };
  render(){
    //eslint-disable-next-line
    const {task,tasks} = this.state;
    return(
      <div className ="col-6 mx-auto mt-5">
       <form onSubmit={this.onSubmitTask}>
        <div className ="form-group">
          <label htmlFor="taskInput">Enter Task</label>
          <input onChange={this.handleChange} value={this.state.task} type="text" id="taskInput" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Task</button>
        </div>

       </form>
       <Overview tasks={tasks}/>
      </div>
    ) ;
  }
}

export default App;
