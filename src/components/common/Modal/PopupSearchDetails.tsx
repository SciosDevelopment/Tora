import React, { useState } from 'react'

const PopupSearchDetails = (props) =>{
    const {tags=['django', 'node.js', 'ruby','c++', 'javscript', '','','']} = props
    return (
        <>
        <div className="searchpopup innerShadow2">
            <div className="taglist">
                {tags.map((data, index)=>{
                    return <mark className={`skillMark ${(index%4 === 0) && 'mark_red'}`} >{data}</mark> 
                })}
            </div>
            <div className="option">
                <p> popularity </p>
                <p> Created date </p>
            </div>
        </div>
        </>
    )
}

export default PopupSearchDetails
