import React, { useEffect, useState } from 'react'

import iconMenu from '../../../img/icon_menu2.png'
import IssuePostItem from './IssuePostItem'
import iconBranchArrowDownBlack from '../../../img/icon_branch_arrow_down_black.png'
import iconBranchSearchNavy from '../../../img/icon_branch_search_navy.png'
import iconArrowIssueTitle from '../../../img/icon_arrow_issue_title.png'
import iconObjectiveMenu from '../../../img/icon_objective_menu.png'
import iconObjectiveAdd from '../../../img/icon_objective_add.png'
import iconIssueDown from '../../../img/icon_issue_down.png'
import Slider from "react-slick"
import { useMediaQuery } from 'react-responsive'
import { Sortable } from 'sortablejs'
import IssueBoard from './IssueBoard'
import Searchbar from '../../../components/common/Searchbar'

const IssueList = (props) => {
    const {setMode = null, mode = false} = props
    const [isShowObjectivePopup, setIsShowObjectivePopup] = useState(false)
    const [branchList, setBranchList] = useState(["master","master2","master3","master4","master5","master6"])
    const [isSelected, setIsSelected] = useState(null)
    const isMobile = useMediaQuery({ query:"(max-width:767px)" })
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    
    useEffect(() => {
        const items = document.getElementById('cardContent')
        if(!items) return
        Sortable.create(items, {
            group: 'shared',
            multiDrag: true,
            selectedClass: "selected",
            animation: 150
        })
    }, [mode])
    
    // 데이터의 형태가 중요
    const [issueData, setIssueData] = useState([
        {title:'a', data:['a', 'c'], color:'#0f9444'},
        {title:'b', data:['b'], color:'#fbf8a4'},
        {title:'c', data:['c'], color:'#fc9191'},
        {title:'d', data:['c'], color:'#fc9191'}
    ])
    
    const [issueData2, setIssueData2] = useState ([
        {title:'a', content:'contents!', tag:'a,b,c', state:'open', userId:1, bountySort:'bitcoin', bountyAmount:0.001},
        {title:'b', content:'contents!', tag:'a,b,c', state:'open', userId:1, bountySort:'bitcoin', bountyAmount:0.001},
        {title:'c', content:'contents!', tag:'a,b,c', state:'open', userId:1, bountySort:'bitcoin', bountyAmount:0.001},
        {title:'d', content:'contents!', tag:'a,b,c', state:'open', userId:1, bountySort:'bitcoin', bountyAmount:0.001},
        {title:'e', content:'contents!', tag:'a,b,c', state:'open', userId:1, bountySort:'bitcoin', bountyAmount:0.001},
    ])
    
    const clickObjectivePopup = () => setIsShowObjectivePopup(!isShowObjectivePopup)
    const selectBranch = (data)=> { setIsSelected(data) }
    const Popup = () =>{
        return <div className="objectivePopup innerShadow2">
            <div className="wrap">
                <div className="searchbox">
                    <input type="text" />
                    <button className='btn_search'>
                        <img src={iconBranchSearchNavy} alt="search" />
                    </button>
                </div>
                <h5>Switch board</h5>
                <div className="items innerShadow2">
                    {branchList.map((data)=>{
                        return (<button onClick={()=>selectBranch(data)}>
                        {isSelected === data &&  <img src={iconBranchArrowDownBlack} alt="check"/>} {data}
                        </button>)})}
                </div>
                <div className="btnbox">
                    <button className='btn_confirm'>Create board</button>
                    <button className='btn_del'>Delete board</button>
                </div>
            </div>
        </div>
    }
    const CardViewHeader = () =>{
        return (
            <div className="head">
            <div className="left">     
                <button className='option' onClick={clickObjectivePopup}>
                    Objective
                    <img src={iconArrowIssueTitle} alt="objective"/>
                </button>
                {isShowObjectivePopup && <Popup/>}
            </div>
            <div className="right">
                <button className='btn_add'>
                    <img src={iconObjectiveAdd} alt="add" />
                </button>
                
                <button>
                    <img src={iconObjectiveMenu} alt="menu" onClick={()=>setMode(!mode)}/>
                </button>
            </div>
            </div>
        )

    }

    const PostViewHeader = () => {
        return (
            <div className="head">
                <div className="left">
                    <button>All</button>
                    <button>Open</button>
                    <button>Closed</button>
                </div>
                <div className="right">
                    <div className="search">
                        <Searchbar details={true}/>
                    </div>
                    <button className='btn_menu'><img src={iconMenu}  alt="menu" onClick={()=>setMode(!mode)}/></button>
                </div>
            </div>
        )   
    }

    const CardView = () => {
        return (
            <div className="contentbox">
                <div className="barStyle leftBar">
                    <button>
                        <img src={iconIssueDown} alt="down" />
                        <p>Open</p>
                        <span>{issueData.length}</span>
                    </button>
                </div>

                    
                { !isMobile &&
                <div className="cardContent" id="cardContent">
                    {issueData.map(d=> 
                    <IssueBoard title={d.title}
                                color={d.color} 
                                data={d.data}/>)}
                </div>}



                {/* 모바일용 container */}
                { isMobile &&
                <div className="cardContent">
                    <Slider {...settings}>
                        {issueData.map(d=> 
                        <IssueBoard title={d.title}
                                    color={d.color} 
                                    data={d.data}/>)}
                    </Slider>
                </div>}


                <div className="barStyle rightBar">
                    <button className='btn_add'>
                        <img src={iconObjectiveAdd} alt="add" />
                    </button>
                </div>
            </div>
        )
    }

    const PostView = ()=>{
        return <div className='contentbox'>
            <div className="issueListBody">
               {issueData2.map((d)=> <IssuePostItem data = {d}/>)} 
            </div>
        </div>
    }

    return (
        <>
        <div className="issueList">
            {mode && <CardViewHeader/>}
            {!mode && <PostViewHeader/>}
            {mode && <CardView/>}
            {!mode && <PostView/>}
        </div>
        </>
    )
}

export default IssueList