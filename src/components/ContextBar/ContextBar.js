import React from 'react'
import "./ContextBar.css";
import CircleButton from '../CircleButton/CircleButton.js'

const ContextBar = () => {
    return (
        <div className='Body'>
            <p>wpm : 128</p>
            <p>typify </p>
            <div>
                <CircleButton color = 'gold'/>
                <CircleButton color = 'green'/>
                <CircleButton color = 'red'/>
            </div>
    
        </div>
    )
}

export default ContextBar
