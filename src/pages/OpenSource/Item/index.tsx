import iconStar from '../../../img/ic_star.png'
import iconLogoMini from '../../../img/ic_logo_mini.png'
import imgSample from '../../../img/img_sample.png'
import { history } from 'src/configureStore'
import { useEffect } from 'react'


const ProjectItem = (props) => {
    const {data, id} = props
    useEffect(()=>{console.log(data)},[])
    return (
        <li key={id} onClick={()=>{history.push(`/project/${id}/main`)}}>
            <div className="item innerShadow">
                <div className="top">
                    <img src={imgSample} alt="thumbnail" />
                </div>
                <div className="btm">
                    <div className="star">
                        <img src={iconStar} alt="star" />
                        <span>{data.score ? data.score : 0}</span>
                    </div>
                    <div className="textbox">
                        <h4>{data.name}</h4>
                        <div className="textInner">
                            <span className="text"> {data.description ? data.description : "-"} </span>
                            {data.program_language && <mark className="skillMark">{data.program_language}</mark>}
                        </div>
                    </div>
                </div>
                <div className="iconbox">
                    <div className="icon_left">
                        <img src={iconLogoMini} alt="go to ide" onClick={(e)=>{
                                e.stopPropagation()
                                history.push(`/ide/${id}/main`)}}/>
                        {/* chat
                        <div className="text_comment">
                            <img src={iconComment} alt="comment" />
                            <span>345</span>
                        </div> */}
                    </div>

                    {/* contributor
                    <div className="icon_right">
                        <img src={userProfile} alt="user profile" />
                        <span>+ 10</span>
                    </div> */}
                </div>
            </div>
        </li>
    )
}

export default ProjectItem
