import React,{FunctionComponent, useState} from 'react';
import FollowViewItem from './Item'

interface FollowerViewProps{
    key : number,
    title : string,
}

const FollowerView: FunctionComponent<FollowerViewProps> = (Props:FollowerViewProps) => {

    const {key, title} = Props

    const FollowerData = () => {
        return Array(
            {key :0, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :1, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :2, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :3, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :4, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},        )
    }

    const [FollowerUserList] = useState(FollowerData)

    return (
        <div  className= "followerview">
            <input type="hidden" id="FollowListKey">{key}</input>
            <div className= "followerview_title">
                {title}
            </div>
            <div className= "followerview_search">

            </div>
            <div className= "followerview_list">
            {
                    FollowerUserList.map(item => {
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