import './App.css';
import List from './list';
import React,{Component} from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputVal: "",
      todos: [],
      errorInput: false
    }
  }

  addTodo = () => {
    const { inputVal, todos } = this.state
    const newTodo = todos

    if (inputVal.length) {
      newTodo.push({ id: Math.random(), name:  inputVal, done: false})
      this.setState({todos: newTodo, inputVal: "", errorInput: false})
    } else {
      this.setState({errorInput: true})
    }
  }

  updateInput = (e) => {
    this.setState({inputVal: e.target.value, })
  }

  changeCheck = (id) => {
    const newArr = []
    for(let obj of this.state.todos) {
      if (obj.id == id) {
        obj.done = !obj.done
      }
      newArr.push(obj)
    }

    this.setState({todos: newArr})
  }

  updateNewValue = (todoVal, id) => {
    const newArr = []
    for(let obj of this.state.todos) {
      if (obj.id == id) {
        obj.name = todoVal
      }
      newArr.push(obj)
    }
    this.setState({todos: newArr})
  }

  deleteTodo = (id) => {
    const newArr = []
    for(let obj of this.state.todos) {
      if (obj.id != id) {
        newArr.push(obj)
      }
    }
    this.setState({todos: newArr})
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Todo List App - DOM</h1>
        <div className="input-group mb-3">
          <input 
            value={this.state.inputVal} 
            onChange={(e) => this.updateInput(e)} 
            id="new-todo-input"
            type="text"
            className="form-control"
            placeholder="Add Text..."
          />
          <button onClick={this.addTodo} id="add-todo" className="btn btn-primary" type="button"> Add Todo </button>
        </div>
        {this.state.errorInput && <p>please add something</p>}
        <main>
          {this.state.todos.map((obj) => {
            return (
              <List 
                deleteTodo={this.deleteTodo}
                updateNewValue={this.updateNewValue} 
                changeCheck={this.changeCheck} 
                key={obj.id} 
                item={obj} 
              />
            )
          })}
        </main>
      </div>
   
    )
  }
}

export default App;
