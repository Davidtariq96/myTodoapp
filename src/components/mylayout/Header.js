import React from 'react'
import {Link} from 'react-router-dom';
 function Header() {
    return (
            <header style={topStyle}>
                <h1>TodoList</h1>

                <Link style={myLinks} to="/">Home</Link> | <Link style={myLinks} to="/about">About</Link>
            </header>
    )
}

const topStyle ={
    background:'grey',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const myLinks ={
    color: '#fff',
    textAlign: 'center'
}
export default Header