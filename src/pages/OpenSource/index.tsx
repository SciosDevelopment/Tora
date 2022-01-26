import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from '../../components/common/Header/Header'
import iconPrev from '../../img/icon_prev.png'
import iconNext from '../../img/icon_next.png'
import iconSelect2 from '../../img/ic_select2.png'
import ProjectItem from './Item'
import axios from 'axios'
import Searchbar from 'src/components/common/Searchbar'

const OpenSource = (props) => {
    const {keyword="", user=""} = props
    const [isShowPopupProject, setIsShowPopupProject] = useState(false)

    /****************************************************
     * @name slickSlider 
     * @summary 헤더 바로 밑 기술 마크 슬라이드
     * @link https://react-slick.neostack.com/docs/example/simple-slider 
     ****************************************************/
    const slideSkills = ['1','2','3','4','5','6','7', '8','9','10','11','12','13','14']


    // 슬라이드 '이전' 버튼
    const SlickArrowLeft = (props) => {
        const { currentSlide, slideCount } = props
        return (
            <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            >
            <img src={iconPrev} alt="prev"/>
            </button>
        )
    }

    // 슬라이드 '다음' 버튼
    const SlickArrowRight = (props) => {
        const { currentSlide, slideCount } = props
        return (
            <button
            {...props}
            className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <img src={iconNext} alt="Next"/>
        </button>
        )
    }

    const slideSettings = {
        className: "slider variable-width",
        dots: false,
        arrows:true,
        infinite: true,
        centerMode: false,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,
    }
    
    const [projectInfo, setProjectinfo] = useState([])
    useEffect(()=>{ searchProject() }, [])
    
    const searchProject = () => {
        const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
        const data =  { project: { search_text: keyword, sort: "new", user_id: user} } 
        
        axios.post(`${SERVER_IP}/api/v1/projects `,data).then((res)=>{
            setProjectinfo(res.data.data)
            console.log(res.data.data)
        }).catch(e=>{
            if(e.response) {
                var status = e.response.status // or use message
                // 로그인이 필요
                if(status === 404) {
                    alert("검색조건에 맞는 프로젝트가 존재하지않습니다.")
                }
                if(status === 400) alert("프로젝트 검색에 실패했습니다. 다시 시도해주세요.")
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                // temp
                alert("server is dead")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        }) 
    }

    const Item = () => {
        return (<>{
            projectInfo.map((e) =>  {
                return (e.attributes?.state === "use") && 
                       (e.attributes?.project_type==="type_public") &&
                       <ProjectItem id = {e.id} data = {e.attributes}/>})}</>)
    }


    return (
        <div className="openSource otherHeaderStyle">
            <Header setIsShowPopupProject={setIsShowPopupProject}/>

            <div className="maxWrap">
                <div className="titleWrap">
                    <h2>Open source project</h2>
                </div>
                
                <div className="skillWrap">
                    <div className="skillBox">
                        <div className="skills">
                            <Slider {...slideSettings}>
                                {
                                    slideSkills.map((e,i) => {
                                        return( 
                                            <div key={i}>
                                                <button>{e}</button>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>

                    <div className="options">
                        <Searchbar details={true}/>
                    </div>
                </div> {/* // skillWrap */}

                <div className="items">
                    <ul>
                        <Item />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OpenSource
