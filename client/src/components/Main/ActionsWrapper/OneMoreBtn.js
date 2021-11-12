import React from 'react'

function OneMoreBtn() {
    return (
        <div>
            {/* <button onClick={() => window.location.reload(false)}>One more!</button> */}
            <span onClick={() => window.location.reload(false)} className="material-icons">refresh</span>
        </div>
    )
}

export default OneMoreBtn
