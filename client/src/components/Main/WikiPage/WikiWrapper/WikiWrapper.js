import React from 'react'
import './WikiWrapper.css'

function WikiWrapper() {
    return (
        <div>
            <iframe className="wiki-link" src="https://sv.wikipedia.org/wiki/Salt" width="100%" height="300"></iframe>
        </div>
    )
}

export default WikiWrapper
