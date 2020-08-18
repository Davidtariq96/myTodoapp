import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <form   onSubmit={this.onSubmit} style={{display:'flex',justifyContent:'space-between',marginBottom:'2rem',minWidth:
            '100px',maxWidth:'600px',marginLeft:'1rem',marginRight:'1rem'}}>
                <input 
                type="text" 
                name="title"
                placeholder="Add Todo items..."
                style={{padding: '5px', flex:'10',marginTop:'2rem'}}
                value = {this.state.title}
                onChange = {this.onChange}
                />
                
                <input 
                type="submit"
                value="submit"
                className="btn"
               style={{flex:'1'}} />
            </form>
        )
    }
}

// Proptypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
    
    }
export default AddTodo
