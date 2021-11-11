import React from 'react'
import './SelectorBtn.css'

function SelectorBtn({name}) {
    return (
        <div>
            <button className="selector__button">{name}</button>
        </div>
    )
}

export default SelectorBtn
