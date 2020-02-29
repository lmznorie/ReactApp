//const React = require('reat') es la version antigua al uso de import
import React, { useState } from 'react'
//import { render } from 'react-dom'
import logo from './logo.svg';
import './App.css';

const App = () => {
    //const [name, setname] = useState('BigBoss')
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador+1)
    }

    const restar = () => {
        setContador(contador-1)
    }

    return(
        
        <div className="App">
            <div className="App-header">
                <div>BigBoss</div>
                <img src={logo} className="App-logo"></img>
                <div>{contador}</div>
                <button onClick={sumar}>
                    SUMAR
                </button>
                <button onClick={restar}>
                    RESTAR
                </button>
            </div>

        </div>
    )
}

export default App