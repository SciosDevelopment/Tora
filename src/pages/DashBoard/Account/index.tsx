import React from 'react'
import Profile from 'src/img/profile4.png'
import Plus from 'src/img/plus-gray.png'
import Minus from 'src/img/minus-gray.png'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import {history} from 'src/configureStore'

const DashboardSetting = () => {
    const [userdata, setUserData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null, pw:"", region:""})
    const [prevData, setPrevData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null, pw:"", region:""})
    const [swit, setSwitch] = useState("")
    const [img, setImg] = useState(null)

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    useEffect(()=>{
        axios.get(`${SERVER_IP}/api/v1/user/mypage`).then(
            (res)=>{                    
                const info_attr = res.data.data.attributes
                const data_ = { about_me:info_attr.about_me, email:info_attr.email,
                                followers:info_attr.followers, followings:info_attr.followings,
                                name:info_attr.name, score:info_attr.score, photo: info_attr.photo.url ? SERVER_IP + info_attr.photo.url: null, pw:"",
                                region:""}
                setUserData(data_)
                setPrevData(data_)
            })
            .catch((e)=>{
                    // 401 error == 새로고침시, axios header가 사라지는 현상때문에 나타남. 이부분 문제점 해결방안 찾기
                    console.log("Mypage MainView Error")
                    console.log(e)
            })
    },[])
    let complete = false
    useEffect(()=>{ if(complete) complete = false },[complete])

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
             // 임시방편
             history.replace("/dashboard/me/activities")
             history.replace("/dashboard/me/setting")
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

    const SelectRegion = () => {
        const data = ["cat", "dog", "hamster",] // region data만 가져오면 됨

        return (
        <div>
            <select name="region" value={userdata.region} onChange={handleChange}>
                <option value="">--Please choose Region--</option>
            {data.map((d)=>{return <option value={d}>{d}</option>})}              
            </select>
        </div>)
    }

    return (<>
        <div className="dbSetting">
            <div>
                <div className="profileImg">
                    <img src = {userdata.photo === null ? Profile : userdata.photo } alt="" 
                    onError = {(e)=> {e.currentTarget.src = Profile}}/>
                    <div>
                        <input type="file" name="file" id="Setting-account-profile-input" accept="image/*" onChange={(e)=>getImageLink(e)}/>
                        <img src = {Plus} alt="" onClick={setImage}/>
                        <img src = {Minus} alt="" onClick={()=>setUserData({...userdata, photo:null})}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="title">Change your Name</div>
                <input type="text" placeholder="" name ="name" value={userdata.name} onChange={handleChange}/>
            </div>
            <div>
                <div className="title">Password</div>
                <div>
                    <input type="password" placeholder="" name="pw" value={userdata.pw} onChange={handleChange}/>
                </div>
            </div>
            <div>
                <div className="title">Description</div>
                <textarea placeholder="" name="about_me" value={userdata.about_me} onChange={handleChange}/>
            </div>
            <div>
                <div className="title">Change your password</div>
                <div>
                    <p>New Password</p>
                    <input type="password" placeholder="" name="new_pw"/>
                </div>
                <div>
                    <p>New Password confirmation</p>
                    <input type="password" placeholder="" name="new_pw_confirm"/>
                </div>
            </div>
            <div>
                <div className="title">Change Region</div>
                <SelectRegion/>
            </div>
            <div>
                <div className="title">Delete</div>
                <button className="delete" onClick={()=>alert("delete")}>
                    Delete Project
                </button>
            </div>

            <div className="btnlist">
                <button onClick={handleSubmit}>
                    Save changes
                </button>
                <button onClick={()=>alert("취소")}>
                    Cancel
                </button>
            </div>
        </div>
    </>)
}

export default DashboardSetting