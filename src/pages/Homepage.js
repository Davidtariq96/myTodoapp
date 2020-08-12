import React from 'react';
import '../css/Homepage.css';

class Homepage extends React.Component{

    toTodoPage = ()=>{
        this.props.history.push('/todo');
    }
    render(){
        return (
            <div className="container">
                <div className="hero-section">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    </div>
                    <div className="text-container">
                        <h1>
                            Schedule <span>ACTIVITIES</span> easily <br/> using the todo application
                        </h1>
                        <div className="button-container">
                            <button onClick = {this.toTodoPage}>
                                Visit todo page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;