import React from 'react'
import './FactContent.css'

function FactContent(props) {
    const { factData } = props; 
    return (
        <div className="factContent">
            <p className="factContent__title">Today's fact!</p>
            <p className="factContent__text">{factData}</p>
        </div>
    )
}

export default FactContent
