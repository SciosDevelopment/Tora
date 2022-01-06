import React, {useState} from 'react'
import modify from '../../../../img/modify.png'

interface Interface {
    isComment:boolean
}

const ServiceItem:React.FC<Interface> = (props:Interface) => {
    const [openStatus, setOpenStatus] = useState<Boolean>(false)
    const {isComment} = props

    const renderComment = () => {
        // parameter 필요
        if(isComment === true) {
            return (
                <>  
                </>
            )
        }
    }
    
    return (
        <div className = "serviceitem">
            <div className = "barview">
                <div className = "title">
                    <p>What types of questions should I avoid asking?</p>
                </div>
                <div className = "date">
                    <p>2020.10.23</p>
                </div>   
                <div className = "arrowbtn" onClick = {()=>setOpenStatus(!openStatus)}>
                    <div/>
                </div>
            </div>

            <div className = "detail">
                {
                    openStatus &&   
                      
                
                    <div className = "body">
                        <div className = "modify">
                            <img src ={modify}/>
                        </div>
                        <div className = "content">
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

export default ServiceItem