import React from 'react'

function OneMoreBtn() {
    return (
        <div>
            <button onClick={() => window.location.reload(false)}>Show me one more!</button>
        </div>
    )
}

export default OneMoreBtn
