import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    itemStyle = () => {
        return{
            background: '#D3D3D3',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            minWidth: '100px',
            maxWidth: '700px',
            margin:'1rem 1rem',
            borderRadius:'5px 5px'
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
    fontSize: '10px',
    float: 'right',
    // margin: '0 1'

}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem
