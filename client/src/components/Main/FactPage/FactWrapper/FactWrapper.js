import React from 'react'
import FactContent from './FactContent'
import ImageContent from './ImageContent'

function FactWrapper(props) {
    const { factData, imageData } = props; 
    return (
        <div>
            <h1></h1>
            <ImageContent imageData={imageData}/>
            <FactContent factData={factData} />
        </div>
    )
}

export default FactWrapper
