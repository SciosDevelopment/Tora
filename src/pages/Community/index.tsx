import React, {FunctionComponent, useEffect, useState} from 'react'
import Header from '../../components/common/Header/Header'
import PostItemView from './Post/ItemView'
import iconPrev from '../../img/icon_prev.png'
import iconNext from '../../img/icon_next.png'
import { history } from '../../configureStore'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Searchbar from 'src/components/common/Searchbar'
import BountyItemView from './IssueBounty/ItemView'

const CommunityMain = (props) => {
    const {page} = props.match.params
    const [isShowPopupProject, setIsShowPopupProject] = useState(false)
    const [filterOption, setFilterOption] = useState("All")
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

    const search = (text) => {
        // 검색어가 존재하지않을때, 검색어 입력해주세요 띄우기
        if(text==="") {
            alert("검색어를 입력해주세요")
            return
        }
        history.push(`/community/${page}/new/`+ text)
    }

    const Items = () => {
        if(page === "post") {
            return (<>
                <div className="itemTitle">
                    <div className="left"/>
                    <div className="right">
                        <p>Replied</p>
                        <p>View</p>
                        <p>Review Score</p>
                        <p>Created</p>
                    </div>
                </div>
                <div className="items">
                    <PostItemView props={props}/>
                </div>
                </>
            )
        }
        else if(page === "bounty") {
            return (<>
                <div className="itemTitle">
                    <div className="left">
                        <p className={filterOption === "All" && "selected"} onClick={()=>setFilterOption("All")}>all</p>
                        <p className={filterOption === "Open" && "selected"} onClick={()=>setFilterOption("Open")}>open</p>
                        <p className={filterOption === "Close" && "selected"} onClick={()=>setFilterOption("Close")}>close</p>
                    </div>
                    <div className="right">
                        <p>Replied</p>
                        <p>View</p>
                        <p>Review Score</p>
                        <p>Created</p>
                    </div>
                </div>
                <div className="items">
                   <BountyItemView props={props}/>
                </div>
                </>
            )
        }
        else {
            history.replace("/404")
            return <></>
        }
    }

    return (
        <div className="communityMain">
            <Header setIsShowPopupProject={setIsShowPopupProject}/>

            <div className="maxWrap">
                <div className="titleWrap">
                    <h2 className={page==="post" && 'select'} onClick={()=>{history.push("/community/post")}}>Community</h2>
                    <h2 className={page==="bounty" && 'select'} onClick={()=>{history.push("/Community/bounty")}}>Issue Bounties</h2>
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
                        <Searchbar details={true} onClick={(search)}/>
                    </div>
                </div> {/* // skillWrap */}
                
                <Items/>
            </div>
        </div>
    )
}

export default CommunityMain