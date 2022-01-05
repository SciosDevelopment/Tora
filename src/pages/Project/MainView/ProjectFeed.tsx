import React from 'react';

import iconFeedUser from '../../../img/img2/icon_feed_user.png';
import iconFeedCheck from '../../../img/img2/icon_feed_check.png';
import iconFeedEyes from '../../../img/img2/icon_feed_eyes.png';
import userSample from '../../../img/img2/user_sample.png';
import feedLine from '../../../img/img2/feed_line.png';

const ProjectFeed = () => {
    return (
        <>
        <div className="feedbox innerShadow2">
            <div className="top_title">Project feed</div>
            <div className="btm">
                <div className="line">
                    <img src={iconFeedUser} alt="icon user" />
                    <img src={userSample} className='img_user_sample' alt="user" />
                    <p>Nicolas Serrano가 참여하였습니다.
                        <span className="date">Oct 21 at 12:56</span>
                    </p>
                </div>
                <p><img src={feedLine} alt="line" /></p>
                <div className="line">
                    <img src={iconFeedCheck} alt="icon check" />
                    <img src={userSample} className='img_user_sample' alt="user" />
                    <p>added the <mark>new-bug</mark>
                        <span className="date">Oct 21 at 12:56</span>
                    </p>
                </div>
                <p><img src={feedLine} alt="line" /></p>
                <div className="line"> 
                    <img src={iconFeedEyes} alt="icon eyes" />
                    <img src={userSample} className='img_user_sample' alt="user" />
                    <p>Nicolas Serrano가 풀리퀘스트 신청으로 요청
                    <span className="date">Oct 21 at 12:56</span>
                    </p>
                </div>
                <p><img src={feedLine} alt="line" /></p>
                <div className="line">
                    <img src={iconFeedCheck} alt="icon check" />
                    <img src={userSample} className='img_user_sample' alt="user" />
                    <p>added the <mark>new-bug</mark>
                        <span className="date">Oct 21 at 12:56</span>
                    </p>
                </div>
            </div>
        </div>{/* // feedbox */}
        </>
    );
};

export default ProjectFeed;