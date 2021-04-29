import React,{useState} from 'react'
import './style/Servicemain.scss'
import ServiceproduceItem from '../../img/serviceitem.png'
//import ServiceproduceOpen from '../../../img/serviceopen.png'
import Header from '../../components/common/Header/Header'
const ServiceMain:React.FC = () => {
    const [openStatus, setOpenStatus] = useState<Boolean>(false);

    return (
            <>
            <Header/>
            <div className = "Service-center-main">
                <div className = "Service-center-view">
                    <div className = "Service-main-view-main">
                        <div className = "Service-main-title">
                            <div className = "Service-main-maintext">
                                <p>Welcome to the Tora Help center</p>
                            </div>
                            <div className = "Service-main-subtext">
                                <p>If you cannot find the answer here, you can contact us via email!</p>
                            </div>
                        </div>

                        <div className = "Service-main-produce" onClick = {()=>setOpenStatus(!openStatus)}>
                            {/* <img src = {ServiceproduceOpen}/> */}
                        </div>
                        <div className = "Service-main-produce-main">
                            {
                                openStatus === false ?

                                <div className = "Service-main-produce-close">
                                </div>
                                :
                                <div className = "Service-main-produce-open">

                                    <div className = "Service-main-produce-item">
                                        <img src = {ServiceproduceItem}/>
                                    </div>
                                    <div className = "Service-main-produce-text">
                                        <p>궁금한 내용을 질문해주세요.</p>
                                    </div>
                                    <div className = "Service-main-produce-button">
                                        <input type='submit' value="Send"></input>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className = "Service-main-ask-main">
                            <div className = "Service-main-ask-view1">
                                <div className = "Service-main-ask-text">
                                    <p>Asking</p>
                                </div>
                                <div className = "Service-main-ask-text2">  
                                    <p>What types of questions should I avoid asking?</p>
                                    <p>What topics can I ask about here?</p>
                                    <p>What does it mean if a question is "closed"?</p>
                                    <p>How do I ask a good question?</p>
                                    <p>Why are questions no longer being accepted from my account?</p>
                                </div>
                            </div>
                            
                            <div className = "Service-main-ask-view2">
                                <div className = "Service-main-ask-text3">
                                    <p>Answering</p>
                                </div>
                                <div className = "Service-main-ask-text4">  
                                    <p>How do I write a good answer?</p>
                                    <p>What does it mean when an answer is "accepted"?</p>
                                    <p>Why and how are some answers deleted?</p>
                                    <p>Why are answers no longer being accepted from my account?</p>
                                    <p>How to reference material written by others</p>
                                </div>
                            </div>
                            
                            <div className = "Service-main-ask-view3">
                                <div className = "Service-main-ask-text5">
                                    <p>My Account</p>
                                </div>
                                <div className = "Service-main-ask-text6">  
                                    <p>I accidentally created two accounts; how do I merge them?</p>
                                    <p>How do I add or remove login credentials from my account?</p>
                                    <p>I lost my password; how do I reset it?</p>
                                    <p>How do I delete my account?</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default ServiceMain