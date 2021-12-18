import React from 'react'
import Title from '../../../../components/common/Title/Title'
import Profile from '../../../../img/profile4.png'
import Plus from '../../../../img/plus-gray.png'
import Minus from '../../../../img/minus-gray.png'
import SnsAccount from './SnsAccount'
import DeleteAccount from './DeleteAccount'
import ChangePassWord from './ChangePassword'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import {history} from '../../../../configureStore'
import CustomModal from 'src/components/common/Modal'

const AccountSetting = () => {
    const [userdata, setUserData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null, pw:""})
    const [prevData, setPrevData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null, pw:""})
    const [swit, setSwitch] = useState("")
    const [img, setImg] = useState(null)

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    useEffect(()=>{
        axios.get(`${SERVER_IP}/api/v1/user/mypage`).then(
            (res)=>{                    
                const info_attr = res.data.data.attributes
                const data_ = { about_me:info_attr.about_me, email:info_attr.email,
                                followers:info_attr.followers, followings:info_attr.followings,
                                name:info_attr.name, score:info_attr.score, photo: info_attr.photo.url ? SERVER_IP + info_attr.photo.url: null, pw:""}
                setUserData(data_)
                setPrevData(data_)
            })
            .catch((e)=>{
                    // 401 error == 새로고침시, axios header가 사라지는 현상때문에 나타남. 이부분 문제점 해결방안 찾기
                    console.log("Mypage MainView Error")
                    console.log(e)
            })
    },[])

    const handleChange = (e) => {
        const {target : {name, value}} = e
        setUserData({...userdata, [name]:value})
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       editInfo()
    }

    const setImage = (e)=> {
        e.preventDefault()
        const inputImage = document.getElementById("Setting-account-profile-input")
        if(inputImage === undefined) return
        inputImage.click()
    }

    const getImageLink = async(e) => {
        var input = e.target
        setImg(input.files[0])
        var fileReader = new FileReader()
        fileReader.readAsDataURL(input.files[0])
        fileReader.onload = ()=>setUserData({...userdata, photo: fileReader.result})    
    }
    
    const editInfo = async() => {
        
        var url = prevData.photo !== null ? prevData.photo : Profile
        const response = await fetch(url)
        const data = await response.blob()
        const ext = url.split(".").pop() 
        const filename = url.split("/").pop()
        const metadata = { type: `image/${ext}` }
        var prevImg = new File([data], filename!, metadata)
        
        
        if(userdata.name === prevData.name && userdata.about_me === prevData.about_me && userdata.photo === prevData.photo) {
            alert("변경정보가 없습니다.") 
            return
        }
        
        var userInfo = new FormData()
        userInfo.append("user[password]", userdata.pw)
        userInfo.append("user[name]", userdata.name)
        userInfo.append("user[email]", userdata.email)
        userInfo.append("user[photo]", img === null ? prevImg : img)
        userInfo.append("user[about_me]", userdata.about_me)

        axios.put(`${SERVER_IP}/api/v1/user/edit`,userInfo)
        .then((res) => {
             alert("수정이 완료되었습니다.")
             history.replace("/mypage/me/setting")
        }).catch((e) => {
            if(e.response) {
                var status = e.response.status // or use message
                const {message} =JSON.parse(e.request.response)
                if(status === 401) // id 존재 x : 401
                    alert("password is incorrect. try this again.")
                
                if(status === 404) // 이미 인증된 유저 : 404
                    alert("user is not found.")
                
                if(status === 400) // default error
                    alert(e.response.data.message[0])
                

                if(status >= 500) alert("server is dead") // 서버 연결 문제일때 : temp-status
            }
            else if(e.request) {
                alert("server is dead")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        })
    }
    
    return (
        <div>
            <div className = "account">
                <div className = "profile">
                    <Title name = "Profile"/>
                    <div className = "profileimg">
                        <img src = {userdata.photo === null ? Profile : userdata.photo } alt=""/>
                        <div className = "settingbtn">
                            <input type="file" name="file" id="Setting-account-profile-input" accept="image/*" onChange={(e)=>getImageLink(e)}/>
                            <img src = {Plus} alt="" onClick={setImage}/>
                            <img src = {Minus} alt="" onClick={()=>setUserData({...userdata, photo:null})}/>
                        </div>
                    </div>
                </div>
                <div className = "region">
                    <Title name = "Region"/>
                    <input type="text" placeholder="Region" value={"Region"} onChange={()=>console.log("Rg")} disabled/>
                </div>
                <div className = "name">
                    <Title name = "Name"/>
                    <input type="text" name="name" placeholder="Write username" value={userdata.name} onChange={handleChange}/>
                </div>

                <div className = "password">
                    <Title name = "Confirm Password" />
                    <input type="password" name="pw" placeholder="Write Password" value={userdata.pw} onChange={handleChange}/>
                </div>
                <div className = "description">
                    <Title name = "Description"/>
                    <textarea name="about_me" placeholder="Write description" value={userdata.about_me} onChange={handleChange}/>
                </div>
                <div className = "language">
                    <Title name = "Program Language"/>
                    <input type="text" placeholder="Program Language" value={"Program Language"} onChange={()=>console.log("PL")} disabled/>
                </div>
                <div className = "position">
                    <Title name = "Position"/>
                    <input type="text" placeholder="Position" value={"Position"} onChange={()=>console.log("ps")} disabled/>
                </div>
                <div className = "snsAccounts">
                    <Title name = "SNS accounts"/>
                    <SnsAccount/>
                </div>
                <div className = "save">
                    <p onClick={handleSubmit}>Save Changes</p>
                </div>
                <div className = "buttonlist">
                    <div className = "delete">
                        <p onClick={()=>setSwitch(swit !== "DA" ? "DA":"")}>Delete My Account</p>
                    </div> 
                    <div className = "change">
                        <p onClick={()=>setSwitch(swit !== "CP" ? "CP":"")}>Change Password</p>
                    </div> 
                </div>

            </div>
            {<CustomModal modalOpen={swit === "DA"} modalClose={()=>setSwitch("")}>
                <DeleteAccount getEmail={()=>{return userdata.email}} close={setSwitch}/>
            </CustomModal>}
            {<CustomModal modalOpen={swit === "CP"} modalClose={()=>setSwitch("")}>
                <ChangePassWord close = {setSwitch}/>
            </CustomModal>}
        </div>
    )
}

export default AccountSetting