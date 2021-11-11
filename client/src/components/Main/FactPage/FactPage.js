import React from 'react'
import FactWrapper from './FactWrapper/FactWrapper'

function FactPage(props) {
    const { factData } = props;
    return (
        <div>
            <h1>FactPage</h1>
            <FactWrapper factData={factData} />
        </div>
    )
}

export default FactPage
