// import React from 'react';
// import logo from './logo.svg';

import React, {Component} from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/Pages/About'
import TodoPage from './pages/TodoPage';
import Homepage from './pages/Homepage';


class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path ="/" component = {Homepage}/>
                        <Route path="/about" component={About}/>
                        <Route path="/todo" component={TodoPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

// Prototypes



export default App;






