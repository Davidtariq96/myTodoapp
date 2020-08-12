import React, { Component } from 'react';


export class Error extends Component {    
    render() {
        return (
            <div
                style = {{
                    padding: "10px 20px",
                    boxShadow: "0px 0px 5px rgba(0,0,0,.2)",
                    borderRadius: "5px",
                    color: "red",
                    position: 'fixed',
                    bottom: '10px',
                    width: '300px',
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}
            >
                <p>{this.props.children}</p>
                <div onClick = {this.props.close} style = {btnStyle}>
                    X
                </div>
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
    flexShrink: "0",
    cursor: 'pointer',
    float: 'right',
    margin: '0 1rem'
}



export default Error
