import React from 'react'
import FactPage from './FactPage/FactPage'
import WikiPage from './WikiPage/WikiPage'
import VideoPage from './VideoPage/VideoPage'
import ActionsWrapper from './ActionsWrapper/ActionsWrapper'

function Main() {
    return (
        <div>
            <h1>Main</h1>
            <FactPage /><ActionsWrapper />
            <WikiPage /><ActionsWrapper />
            <VideoPage /><ActionsWrapper />
        </div>
    )
}

export default Main
