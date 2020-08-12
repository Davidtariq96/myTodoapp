// import React from 'react';
// import logo from './logo.svg';

import React, {Component} from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/mylayout/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import About from '../components/Pages/About'
// import ProtoTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Error from '../components/Error';

class TodoPage extends Component{
    state= {
        todos: [],
        showError: false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(res=> this.setState({todos: res.data}))
    }

    // Toggle complete
    markComplete = (id) =>{
        this.setState({todos: this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })});
    }

    closeError=()=>{
        let newState = {
            ...this.state,
            showError:false
        }
        this.setState(newState)
    }

    // DELETE Btn and Using spread operator to filter through Todo items
    delTodo = (id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter((todo) =>{
                return todo.id !== id
            })]}));  
    };

    componentDidUpdate(pP,Ps,snapshot){
        console.log(pP,Ps,snapshot)
    }

    addTodo = (title) =>{
        if(title.length <= 0){
            const newState = {
                ...this.state,
                showError: true
            }
            this.setState(newState);
            setTimeout(this.closeError,6000)
        }else{
            let newTodo = {
                title,
                completed:false,
                id: uuidv4()
            }
            this.setState({todos:[...this.state.todos,newTodo]})
        }
    }

    render(){
        return(
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo ={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo}/>
                    {
                        this.state.showError &&
                        <Error close = {this.closeError}>
                            Input a valid TODO text
                        </Error>
                    }
                    </div>
            </div>
        );
    }
}

// Prototypes



export default TodoPage;






