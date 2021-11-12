import React from 'react'
import './ImageContent.css'

function ImageContent(props) {
    const { imageData } = props;
    return (
        <div>
            <h1 className="image-header">Image from Metropolitan Museum of Art Met</h1>
            <div className='image__container'>
                <img className="image__content" alt="" src={imageData.url} />
                <div>{imageData.artist}</div>
            </div>
        </div>
    )
}

export default ImageContent
