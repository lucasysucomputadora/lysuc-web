import React from "react";
import ReactDom from"react-dom";

class App extends React.Component {
    render (){
        return(
            <div>
                <Headers username="something"/>
                <Greatings />
            </div>

        )
        
    }
}

class Headers extends React.Component {
    render (){
        return (
            <header>
                <p> Welcome, {this.props.username}</p>
            </header>
        )
    }
}