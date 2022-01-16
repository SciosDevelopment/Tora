import React, {useEffect, useState} from 'react'
import iconIssueDown from '../../../img/img2/icon_issue_down.png'
import iconObjectiveAdd from '../../../img/img2/icon_objective_add.png'
import Slider from "react-slick"
import { useMediaQuery } from 'react-responsive'
import { Sortable } from 'sortablejs'
import IssueBoard from './IssueBoard'

const IssueContent = () => {

    const isMobile = useMediaQuery({ query:"(max-width:767px)" })

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    
    useEffect(() => {
        const items = document.getElementById('content')
        Sortable.create(items, {
            group: 'shared',
            multiDrag: true,
            selectedClass: "selected",
            animation: 150
        })
    }, [])

    const [issueData, setIssueData] = useState([
        {title:'a', data:['a', 'c'], color:'#0f9444'},
        {title:'b', data:['b'], color:'#fbf8a4'},
        {title:'c', data:['c'], color:'#fc9191'},
        {title:'d', data:['c'], color:'#fc9191'}
    ])

    return (
        <>
        <div className="contentbox">
            <div className="barStyle leftBar">
                <button>
                    <img src={iconIssueDown} alt="down" />
                    <p>Open</p>
                    <span>{issueData.length}</span>
                </button>
            </div>

                
            { !isMobile &&
            <div className="content" id="content">
                {issueData.map(d=> 
                <IssueBoard title={d.title}
                            color={d.color} 
                            data={d.data}/>)}
            </div>}



            {/* 모바일용 container */}
            { isMobile &&
            <div className="content">
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
        </>
    )
}

export default IssueContent