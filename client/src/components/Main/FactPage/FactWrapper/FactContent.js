import React from 'react'

function FactContent(props) {
    const { factData } = props; 
    return (
        <div>
            <h1>FactContent</h1>
            <p>{factData}</p>
        </div>
    )
}

export default FactContent
