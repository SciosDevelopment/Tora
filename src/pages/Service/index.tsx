import React,{useState} from 'react'
import ServiceproduceOpen from '../../img/serviceopen.png'
import Header from '../../components/common/Header/Header'
import Searchbar from '../../components/common/Searchbar'
import MarkdownEditor from '../../components/common/MarkdownEditor'
const ServiceMain:React.FC = () => {
    const [openStatus, setOpenStatus] = useState<Boolean>(false)

    return (
            <div className="servicePage">
                <Header/>
                <div className = "main">
                    <div className = "container">
                        <div className="searchbar">
                            <Searchbar/>
                        </div>
                        <div className = "content">
                            <div className = "title">
                                <div className = "maintext">
                                    <p>Welcome to the Tora Help center</p>
                                </div>
                                <div className = "subtext">
                                    <p>If you cannot find the answer here, you can contact us via email!</p>
                                </div>
                            </div>

                            <div className = "writing">
                                {
                                    openStatus === false ? 
                                    <div className = "close"/>
                                    :
                                    <div className = "open">
                                        <div className = "texteditor">
                                            <MarkdownEditor initialEditType="wysiwyg"/>
                                        </div>
                                        <div className = "send">
                                            <input type='submit' value="Send"/>
                                        </div>
                                    </div>
                                }
                                <img src = {ServiceproduceOpen} onClick = {()=>setOpenStatus(!openStatus)}/>
                            </div>

                            <div className = "servicelist">
                                <div className = "container2">
                                    <div className = "title">
                                        <p>QnA</p>
                                    </div>
                                    <div className = "subject">  
                                        <p>What types of questions should I avoid asking?</p>
                                        <p>What topics can I ask about here?</p>
                                        <p>What does it mean if a question is "closed"?</p>
                                        <p>How do I ask a good question?</p>
                                        <p>Why are questions no longer being accepted from my account?</p>
                                    </div>
                                </div>
                            
                                <div className = "container2">
                                    <div className = "title">
                                        <p>Use the Tora</p>
                                    </div>
                                    <div className = "subject">  
                                        <p>How do I write a good answer?</p>
                                        <p>What does it mean when an answer is "accepted"?</p>
                                        <p>Why and how are some answers deleted?</p>
                                        <p>Why are answers no longer being accepted from my account?</p>
                                        <p>How to reference material written by others</p>
                                    </div>
                                </div>
                                
                                <div className = "container2">
                                    <div className = "title">
                                        <p>My Account</p>
                                    </div>
                                    <div className = "subject">  
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
            </div>
    )
}

export default ServiceMain