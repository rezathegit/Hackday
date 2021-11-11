import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FactPage from './FactPage/FactPage'
import WikiPage from './WikiPage/WikiPage'
import VideoPage from './VideoPage/VideoPage'
import SelectorsWrapper from './SelectororsWrapper/SelectorsWrapper'
import './Main.css';

function Main(props) {
    const { factData, imageData } = props;
    return (
        <div className="main">
            
            <h1></h1>
            <BrowserRouter>
            <Routes>

            <Route path='/' element={<SelectorsWrapper />} exact />

            <Route path='/FactPage' element={<FactPage factData={factData} imageData={imageData}/>} />
            <Route path='/WikiPage' element={<WikiPage />} />
            <Route path='/VideoPage' element={<VideoPage />} />

            </ Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main