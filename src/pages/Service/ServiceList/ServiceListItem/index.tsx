import React, {useState} from 'react'
import './style/ServiceListItem.scss'
import Comment from '../../../../../src/components/common/Comment'
import CommentPost from '../../../../../src/components/common/CommentPost'
import modify from '../../../../img/modify.png'

interface Interface {
    isComment:boolean
}

const ServiceListItem:React.FC<Interface> = (props:Interface) => {
    const [openStatus, setOpenStatus] = useState<Boolean>(false)
    const {isComment} = props

    const renderComment = () => {
        if(isComment === true) {
            return (
                <>
                    <div className = "Service-listitem-comment-wrapper">
                        <Comment/>
                    </div>
                    <div className = "Service-listitem-commentpost-wrapper">
                        <CommentPost/>
                    </div>
                </>
            )
        }
    }
    
    return (
        <div className = "Service-listitem-main">
            <div className = "Service-listitem-list">
                <div className = "Service-listitem-text">
                    <p>What types of questions should I avoid asking?</p>
                </div>
                <div className = "Service-listitem-date">
                    <p>2020.10.23</p>
                </div>   
                <div className = "Service-listitem-detail-button" onClick = {()=>setOpenStatus(!openStatus)}>
                    <div className = "Service-listitem-arrow">

                    </div>
                </div>
            </div>

            <div className = "Service-listitem-detail">
                {
                    openStatus === false ?     
                    <div className = "Service-listitem-closed"/>  
                :
                    <div className = "Service-listitem-open">
                        <div className = "Service-listitem-modify">
                            <img src ={modify}/>
                        </div>
                        <div className = "Service-listitem-text-wrapper">
                            <p>How do I write a good answer?</p>
                            <p>How do I write a good answer?</p>
                            <p>How do I write a good answer?</p>
                            <p>How do I write a good answer?</p>
                            <p>How do I write a good answer?</p>
                        </div>
                        
                        {renderComment()}
                    </div> 
                }
            </div>
        </div>
    )
 
}

export default ServiceListItem