import React from 'react'
import FactPage from './FactPage/FactPage'
import WikiPage from './WikiPage/WikiPage'
import VideoPage from './VideoPage/VideoPage'
import ActionsWrapper from './ActionsWrapper/ActionsWrapper'
import SelectorsWrapper from './SelectororsWrapper/SelectorsWrapper'

function Main(props) {
    const { factData } = props;
    return (
        <div>
            <h1>Main</h1>
            <SelectorsWrapper />
            <FactPage factData={factData} /><ActionsWrapper />
            <WikiPage /><ActionsWrapper />
            <VideoPage /><ActionsWrapper />
        </div>
    )
}

export default Main
