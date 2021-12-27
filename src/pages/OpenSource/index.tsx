import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from '../../components/common/Header/Header'
import iconPrev from '../../img/icon_prev.png'
import iconNext from '../../img/icon_next.png'
import iconSelect2 from '../../img/ic_select2.png'
import ProjectItem from './Item'

// AllProjectView는 Item 참고용
const OpenSource = () => {
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


    const Item = () => {
        // temp data
        const itemsArr = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, ]
        return (<>{itemsArr.map((e,i) =>  <ProjectItem idx = {i} data = {e}/>)}</>)
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

                    <select className="moreTag" style={{backgroundImage:`url(${iconSelect2})`}}>
                        <option>More Tag</option>
                        <option>More Tag1</option>
                        <option>More Tag2</option>
                    </select>
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
