import React from 'react'
import OneMoreBtn from './OneMoreBtn'
import FlushBtn from './FlushBtn'
import { Link } from 'react-router-dom';

function ActionsWrapper() {
    return (
        <div>
            <Link to='/'><FlushBtn /></Link>
            <OneMoreBtn />
        </div>
    )
}

export default ActionsWrapper
