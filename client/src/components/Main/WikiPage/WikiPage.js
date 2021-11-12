import React from 'react'
import WikiWrapper from './WikiWrapper/WikiWrapper'
import ActionsWrapper from '../ActionsWrapper/ActionsWrapper'
import './WikiPage.css'

function WikiPage() {
    return (
        <div>
            <h1 className="wiki-header">Read an article from Wikipedia!</h1>
            <WikiWrapper />
            <ActionsWrapper />
        </div>
    )
}

export default WikiPage
