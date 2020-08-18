// import React from 'react';
// import logo from './logo.svg';

import React, {Component} from 'react';
// import{BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/mylayout/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
// import About from '../components/Pages/About'
// import ProtoTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import axios from 'axios';
import Error from '../components/Error';

class TodoPage extends Component{
    state= {
        todos: [
            {
                id: uuidv4(),
                title: 'Launch date with girlfriend',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Seeing a movie at the cinema',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Attending a friend weeding',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'going to the market today',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'football practice',
                completed: true
            },
        ],
        showError: false
    }

//    MAKING A REQUEST TO AN API WE USE COMPONENTSDIDMOUNT METHOD
    
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
    //         .then(res=> 
    //             this.setState({todos: res.data})
    //             this.setState({todos:[...this.state.todos] })
    // }

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
        // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            // .then(res => 
                this.setState({todos: [...this.state.todos.filter((todo) =>{
                return todo.id !== id
            })]});  
    };

    componentDidUpdate(pP,Ps,snapshot){
        console.log(pP,Ps,snapshot)
    }

    addTodo = (title) =>{
        if(title.length <= 0){
            const newState = {
                ...this.state,
                // showError: true,
            }

            // const MySwal = withReactContent(Swal)
            // this.setState();
            Swal.fire({
                icon: 'error',
                timerProgressBar: true,
                showConfirmButton: false,
                text: 'please input a valid todo!',
                toast: true,
                position: 'top-end',
                timer: 5000
              })
        }else{
            let newTodo = {
                title:title,
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






