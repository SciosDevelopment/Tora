import React,{FunctionComponent, useState} from 'react';
import FollowViewItem from './Item'

import SearchIcon from '../../../../../img/search-navy.png'

interface FollowingViewProps{
    key : number,
    title : string,
}

const FollowerView: FunctionComponent<FollowingViewProps> = (Props:FollowingViewProps) => {

    const {key, title} = Props

    const FollowingData = () => {
        return Array(
            {key :0, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :1, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :2, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :3, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :4, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},        )
    }

    const [FollowingUserList] = useState(FollowingData)

    return (
        <div  className= "followingview">
            <input type="hidden" id="FollowListKey">{key}</input>
            <div className= "followingview_title">
                {title}
            </div>
            <div className= "followingview_search">
                <input type = "input" placeholder = 'Search' />
                <div className= "following_search">
                    <img src = {SearchIcon}/>
                </div>      
            </div>
            <div className= "followingview_list">
            {
                    FollowingUserList.map(item => {
                        return (
                            <FollowViewItem key={item.key} name={item.name} text={item.text}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FollowerView;