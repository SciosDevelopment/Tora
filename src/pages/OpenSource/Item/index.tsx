import iconStar from '../../../img/ic_star.png'
import iconLogoMini from '../../../img/ic_logo_mini.png'
import iconComment from '../../../img/ic_comment.png'
import imgSample from '../../../img/img_sample.png'
import userProfile from '../../../img/user_profile.png'


const ProjectItem = (props) => {
    const {data, idx} = props
    
    return (
        <li key={idx}>
            <div className="item innerShadow">
                <div className="top">
                    <img src={imgSample} alt="thumbnail" />
                </div>
                <div className="btm">
                    <div className="star">
                        <img src={iconStar} alt="star" />
                        <span>250</span>
                    </div>
                    <div className="textbox">
                        <h4>AWS project new</h4>
                        <div className="textInner">
                            <span className="text">
                            Gestalt: A set of React UI componets that supports .......supports .......supports .......supports .......supports A set of React UI componets that supports .......supports .......supports .......supports .......supports A set of React UI componets that supports .......supports .......supports .......supports .......supports
                            </span>
                            <mark className="skillMark">design</mark>
                            <mark className="skillMark">node.js</mark>
                            <mark className='skillMark mark_red'>django</mark>
                        </div>
                    </div>
                </div>
                <div className="iconbox">
                    <div className="icon_left">
                        <img src={iconLogoMini} alt="logo" />
                        <div className="text_comment">
                            <img src={iconComment} alt="comment" />
                            <span>345</span>
                        </div>
                    </div>

                    <div className="icon_right">
                        <img src={userProfile} alt="user profile" />
                        <span>+ 10</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProjectItem
