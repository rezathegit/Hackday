import React from 'react'
import FactContent from './FactContent'
import ImageContent from './ImageContent'

function FactWrapper(props) {
    const { factData, imageData } = props; 
    return (
        <div>
            <h1></h1>
            <FactContent factData={factData} />
            <ImageContent imageData={imageData}/>
        </div>
    )
}

export default FactWrapper
