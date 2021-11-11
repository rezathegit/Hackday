import React from 'react'
import FactWrapper from './FactWrapper/FactWrapper'
import ActionsWrapper from '../ActionsWrapper/ActionsWrapper';

function FactPage(props) {
    const { factData, imageData } = props;
    return (
        <div>
            <h1></h1>
            <FactWrapper factData={factData} imageData={imageData} />
            <ActionsWrapper />
        </div>
    )
}

export default FactPage
