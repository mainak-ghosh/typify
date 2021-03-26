import React from 'react'
import "./ContextBar.css";
import CircleButton from '../CircleButton/CircleButton.js'

const ContextBar = () => {
    return (
        <div className='Body'>
            <h5>wpm : 128</h5>
            <h5>typify </h5>
            <div>
                <CircleButton/>
                <CircleButton/>
                <CircleButton/>
            </div>
    
        </div>
    )
}

export default ContextBar
