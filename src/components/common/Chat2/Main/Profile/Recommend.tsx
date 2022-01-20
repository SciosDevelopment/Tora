import React, { FunctionComponent, useState } from 'react';
import RecommendUserItem from '../Item'

const Recommend:FunctionComponent = () => {

    const initData = () => {

        return Array(
            {key :0, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :1, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :2, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :3, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :4, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :5, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :6, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :7, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :8, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
            {key :9, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano"},
        )
    }

    const [RecommendList] = useState(initData)
    return (
        <div className= "recommend">
            <div className= "title">
                <span>recommend</span>
            </div>
            <div className= "list">
                {
                    RecommendList.map(item => {
                        return (
                            <RecommendUserItem key={item.key} name={item.name} text={item.text}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Recommend;