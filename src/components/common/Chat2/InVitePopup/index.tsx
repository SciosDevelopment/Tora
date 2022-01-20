import React, { FunctionComponent, useState } from 'react';
import InVitePopupItem from './Item'
import Searchicon from '../../../../img/searchNavy@2x.png'

const InVitePopup:FunctionComponent = () => {

    const initData = () => {
        return Array(
            {key :0, name : "Nicolas Serrano"},
            {key :1, name : "Nicolas Serrano"},
            {key :2, name : "Nicolas Serrano"},
            {key :3, name : "Nicolas Serrano"},
            {key :4, name : "Nicolas Serrano"},
            {key :5, name : "Nicolas Serrano"},
            {key :6, name : "Nicolas Serrano"},
            {key :7, name : "Nicolas Serrano"},
            {key :8, name : "Nicolas Serrano"},
        )
    }
    const [InVitePopupList] = useState(initData)
    return (
        <div className= "invitepopup">
            <div className= "invite_header">
                    <span>Followings</span>
            </div>
            <div className= "input">
                <input type= "text" />
                <img src= {Searchicon}/>
            </div>
            <div className= "list">
                <div className= "count">
                    <p>4 selected</p>
                </div>
                {
                    InVitePopupList.map(item => {
                        return (
                            <InVitePopupItem key={item.key} name={item.name}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InVitePopup;