import React from 'react'
import OneMoreBtn from './OneMoreBtn'
import FlushBtn from './FlushBtn'
import { Link } from 'react-router-dom';
import './FlushBtn.css'

function ActionsWrapper() {
    return (
        <div>
            <div className='onemore__button'>
                <OneMoreBtn />
            </div>
            <Link to='/'><FlushBtn /></Link>
        </div>
    )
}

export default ActionsWrapper
