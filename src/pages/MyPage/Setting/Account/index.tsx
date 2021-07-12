import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/AccountSetting.scss'
import Profile from '../../../../img/profile4.png'
import Plus from '../../../../img/plus-gray.png'
import Minus from '../../../../img/minus-gray.png'
import SnsAccounts from './SnsAccounts'
import DeleteAccount from './DeleteAccount/MyPageDeletAccount'
import ChangePassWord from './ChangePassword/MyPageChangePassword'
import { useEffect ,useState} from 'react'
import axios from 'axios'

const AccountSetting = () => {
    const [userdata, setUserData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null, pw:""})
    const [showDA, setDA] = useState(false)
    const [showCP, setCP] = useState(false)
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    useEffect(()=>{
        axios.get(`${SERVER_IP}/api/v1/user/mypage`).then(
            (res)=>{                    
                const info_attr = res.data.data.attributes
                const data_ = { about_me:info_attr.about_me, email:info_attr.email,
                                followers:info_attr.followers, followings:info_attr.followings,
                                name:info_attr.name, score:info_attr.score, photo:info_attr.photo.url, pw:""}
                setUserData(data_)
            })
            .catch((e)=>{
                    // 401 error == 새로고침시, axios header가 사라지는 현상때문에 나타남. 이부분 문제점 해결방안 찾기
                    console.log("Mypage MainView Error")
                    console.log(e)
            })
    },[])

    const handleChange = (e) => {
        const{target : {name, value}} = e
        setUserData({...userdata, [name]:value})
    }

    return (
        <div>
            <div className = "Setting-account-main">
                <div className = "Setting-account-profile">
                    <Title name = "Profile"/>
                    <div className = "Setting-account-profile-img">
                        <img src = {Profile} alt=""/>
                        <div className = "Setting-account-profile-set">
                            <img src = {Plus} alt=""/>
                            <img src = {Minus} alt=""/>
                        </div>
                    </div>
                </div>
                <div className = "Setting-account-region">
                    <Title name = "Region"/>
                    <input type="text" placeholder="Region" value={"Region"} onChange={()=>console.log("Rg")} disabled/>
                </div>
                <div className = "Setting-account-name">
                    <Title name = "Name"/>
                    <input type="text" name="name" placeholder="Write username" value={userdata.name} onChange={handleChange}/>
                </div>

                <div className = "Setting-account-password">
                    <Title name = "Confirm Password" />
                    <input type="password" placeholder="Write Password" value={userdata.pw} onChange={handleChange}/>
                </div>
                <div className = "Setting-account-description">
                    <Title name = "Description"/>
                    {/* 여러줄로 변경 */}
                    <input type="text" placeholder="Write description" value={userdata.about_me} onChange={handleChange}/>
                </div>
                <div className = "Setting-account-program-language">
                    <Title name = "Program Language"/>
                    <input type="text" placeholder="Program Language" value={"Program Language"} onChange={()=>console.log("PL")} disabled/>
                </div>
                <div className = "Setting-account-position">
                    <Title name = "Position"/>
                    <input type="text" placeholder="Position" value={"Position"} onChange={()=>console.log("ps")} disabled/>
                </div>
                <div className = "Setting-account-sns-accounts">
                    <Title name = "SNS accounts"/>
                    <SnsAccounts/>
                </div>
                <div className = "Setting-account-save-button">
                    <p>Save Changes</p>
                </div>
                <div className = "Setting-account-button">
                    <div className = "Setting-account-delete-button">
                        <p onClick={()=>setDA(!showDA)}>Delete My Account</p>
                    </div> 
                    <div className = "Setting-account-change-button">
                        <p onClick={()=>setCP(!showCP)}>Change Password</p>
                    </div> 
                </div>

            </div>
            {
                showDA &&
                <div className = "Setting-account-delete-account">
                    <DeleteAccount/>
                </div>
            }
            {
                showCP &&
                <div className = "Setting-account-change-password">
                    <ChangePassWord/>
                </div>
            }
        </div>
    );
};

export default AccountSetting