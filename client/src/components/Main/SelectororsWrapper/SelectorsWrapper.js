import React from 'react'
import SelectorBtn from './SelectorBtn'
import { Link } from 'react-router-dom';

function SelectorsWrapper() {
    return (
        <div>
            <h1></h1>
            <Link to='/FactPage'><SelectorBtn name={"FactPage"}/></Link>
            <Link to='/WikiPage'><SelectorBtn name={"WikiPage"}/></Link>
            <Link to='/VideoPage'><SelectorBtn name={"VideoPage"}/></Link>
        </div>
    )
}

export default SelectorsWrapper
