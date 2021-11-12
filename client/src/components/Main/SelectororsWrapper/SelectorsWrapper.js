import React from 'react'
import SelectorBtn from './SelectorBtn'
import { Link } from 'react-router-dom';
import './SelectorsWrapper.css'

function SelectorsWrapper() {
    return (
        <div className='selector__container'>
            <h1></h1>
            <Link className='selector__link' to='/FactPage'><SelectorBtn name={"FactPage"} /><img style={{height: '9rem'}} src='/pee.png' /></Link>
            <Link className='selector__link' to='/WikiPage'><SelectorBtn name={"WikiPage"} /><img style={{height: '9rem'}} src='/poop.png' /></Link>
            <Link className='selector__link' to='/VideoPage'><SelectorBtn name={"VideoPage"} /><img style={{height: '9rem'}} src='/peepoop.png' /></Link>
        </div>
    )
}

export default SelectorsWrapper
