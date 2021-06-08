import React from 'react';
import './style/IssueItem.scss'
import Clouddownlogo from '../../../../img/branch-navy.png';
import Commentslogo from '../../../../img/commentslogo.png';
import Exclamationyellow from '../../../../img/exclamation yellow.png';
import Profile from '../../../../img/profile.png';

interface IssueMainItem{
    title : string,
    version : string,
    context : string,
    tag : string,
    time : string,
    counter1 : number,
    counter2 : number,
}

const IssueItem:React.FC<IssueMainItem> = (Props) => {
    let {title, version, context, tag, time, counter1, counter2} = Props

    return (
        <div className = "Issue-main-item">
            <div className = "Issue-main-item-img">
                <img src = {Exclamationyellow}/>
            </div>
            <div className = "Issue-main-item-title">
                <p>{title}</p>
            </div>
            <div className = "Issue-main-item-context">
                <p>{context}</p>
            </div>
            <div className = "Issue-main-item-button">
            <input type='submit' value="Label"></input>
                <div className = "Issue-main-item-tag">
                    <p>{tag}</p>
                </div>
            </div>
            <div className = "Issue-main-item-sub">
                <div className = "Issue-main-item-time">
                    <p>{time}</p>
                </div>
                <div className = "Issue-main-item-sub2">
                    <div className = "Issue-main-item-profile">
                        <img src = {Profile}/>
                    </div>
                    <div className = "Issue-main-item-counter1">
                        <img src = {Clouddownlogo}/>
                        <p>{counter1}</p>
                    </div>
                    <div className = "Issue-main-item-counter2">
                        <img src = {Commentslogo}/>
                        <p>{counter2}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default IssueItem;