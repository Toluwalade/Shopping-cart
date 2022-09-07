import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

class Todo extends Component {

    render() {
        return (
            <table className='table'>
                { this.props.todos.map(todo => {
                    return (<tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td><button onClick={()=>{console.log(todo.id)
                            this.props.handleDelete(todo.id)}}>
                            <i className="fa-solid fa-trash-can"></i>
                            </button>
                            </td>
                        <td>
                            <button onClick={()=>{this.props.handleDone(todo.id)}}><i className="fa-solid fa-check"></i>
                            </button>
                            </td>
                    </tr>)
                })}
            </table>
        );
    }
}

Todo.propTypes = {

};

export default Todo;



