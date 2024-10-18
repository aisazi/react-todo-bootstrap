import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      todoValue: this.props.item.name
    }
  }

  editTodo = () => {
    const { edit, todoValue } = this.state
    if (edit == true) {
      this.props.updateNewValue(todoValue, this.props.item.id)
    }
    this.setState({edit: !edit})
  }

  updateTodo = (e) => {
    this.setState({todoValue: e.target.value})
  }
  deleteTodo = () => {
    this.props.deleteTodo(this.props.item.id)
  }

  render() {
    const { done, id } = this.props.item
    const { changeCheck } = this.props
    return (
        <div className="input-group mb-1">
          <span className="input-group-text">
            <input onChange={() => changeCheck(id)} checked={done} type='checkbox'/>
          </span>

          <input 
            onChange={(e) => this.updateTodo(e)} 
            disabled={!this.state.edit} 
            value={this.state.todoValue} 
            type='text'
            className={`form-control ${done && 'line-thru'}`}
          />

          <button 
            onClick={this.editTodo} 
            className=' btn btn-secondary' 
            type='button'
            style={{background: this.state.edit ? 'green' : 'orange'}}
          >
              {this.state.edit ? 'Save' : 'Edit'}
          </button>

          <button onClick={this.deleteTodo}  className='btn btn-danger' type='button'>Delete</button>
          </div>           
       )
  }
}


