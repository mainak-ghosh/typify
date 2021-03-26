import React from 'react'
import "./ContextBar.css";
import CircleButton from '../CircleButton/CircleButton.js'

const ContextBar = () => {
    return (
        <div className='Body'>
            <p>wpm : 128</p>
            <p>typify </p>
            <div>
                <CircleButton/>
                <CircleButton/>
                <CircleButton/>
            </div>
    
        </div>
    )
}

export default ContextBar
