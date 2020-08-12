import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    itemStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.itemStyle()}>
                <p>
                    <input checked = {completed} type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }

                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle= {
    background : '#ff0000',
    color : '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    margin: '0 1rem'

}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem
