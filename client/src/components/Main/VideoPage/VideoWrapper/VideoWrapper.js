import React from 'react'
import './VideoWrapper.css'

function VideoWrapper() {
    return (
        <div className="video-wrapper">
            <iframe width="375" height="315" src="https://www.youtube.com/embed/Ha6yUxze1vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoWrapper
