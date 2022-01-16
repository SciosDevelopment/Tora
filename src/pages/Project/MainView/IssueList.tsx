import React, { useState } from 'react'

import iconMenu from '../../../img/img2/icon_menu2.png'
import iconSelect2 from '../../../img/img2/ic_select2.png'
import IssueItem from './IssueItem'

const IssueList = () => {

    const [issueList, setIssueList] = useState([1,2,3])
    
    return (
        <>
        <div className="issueList">
            <div className="head">
                <div className="left">
                    <button>All</button>
                    <button>Open</button>
                    <button>Closed</button>
                </div>
                <div className="right">
                    <select className="moreTag" style={{backgroundImage:`url(${iconSelect2})`}}>
                        <option>More Tag</option>
                        <option>More Tag1</option>
                        <option>More Tag2</option>
                    </select>
                    <button className='btn_menu'><img src={iconMenu}  alt="menu" /></button>
                </div>
            </div>
            <div className="issueListBody">
            {issueList.map((d)=> <IssueItem/>)}
                
            </div>
        </div>
        </>
    )
}

export default IssueList