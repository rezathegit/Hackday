import React from 'react'
import FactContent from './FactContent'
import ImageContent from './ImageContent'

function FactWrapper(props) {
    const { factData } = props; 
    return (
        <div>
            <h1>FactWrapper</h1>
            <FactContent factData={factData} />
            <ImageContent />
        </div>
    )
}

export default FactWrapper
