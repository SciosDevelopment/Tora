import React, { useState } from 'react';

import img2 from '../../img/guide/img2.png';
import img2Mobile from '../../img/guide/img2_mobile.png';
import img3 from '../../img/guide/img3.png';
import img4 from '../../img/guide/img4.png';
import img4Mobile from '../../img/guide/img4_mobile.png';
import img4Phone from '../../img/guide/img4_phone.png';
import section1 from '../../img/guide/section1.png';
import section1Mobile from '../../img/guide/section1_mobile.png';
import section3Heart from '../../img/guide/section3_heart.png';
import bg1 from '../../img/guide/bg.png';
import bg2 from '../../img/guide/bg2.png';
import bg2Mobile from '../../img/guide/bg2_mobile.png';

import { useMediaQuery } from 'react-responsive';

import GoTop from '../../components/common/Header2/Item/GoTop';
import Header2 from 'src/components/common/Header2/Header2';



const Guide = () => {

    const isPc = useMediaQuery({ query:"(min-width:992px)" })
    const isTablet = useMediaQuery({ query:"(max-width:991px)" })
    const isMobile = useMediaQuery({ query:"(max-width:767px)" })


    return (
    <div className="guidePage">
        <div className ="header">
            <Header2/>
        </div>
        <div className="section1" 
            style={
            isPc ? {backgroundImage: `url(${section1})`}: {backgroundImage: `url(${bg1})`}
            }
        >
            <div className="contents">
                <div className = "introduction">
                    Please give a good influence
                    {!isMobile && <br />}
                    to the world through
                    {!isMobile && <br />}
                    participation in open source
                </div>
                <div className = "discription">
                    Contribute to society and improve your abilities
                    {!isMobile && <br />}
                    and rewards through follow and open source projects
                </div>
                <div className="btn">
                    <a href="#">Try Project</a>
                    <a href="#">Try Community</a>
                </div>
            </div>

            {
                !isPc && <img src={section1Mobile} alt="section1" />
            }
        </div>

        <div className="section2">
            {
            isPc && <img src={img2} alt="section2 img" />
            }
            
            <div className = "discription">
                Use the translation function of
                {!isMobile && <br />}
                follow and chat to share your
                {!isMobile && <br />}
                opinions with people around the world
            </div>

            {
                !isPc && <img src={img2Mobile} alt="section2 img" />
            }
        </div>

        
        <div className="section3">
            <img src={img3} alt="section3 img" />
            {
                isTablet &&
                <img src={section3Heart} className="section3Heart" alt="section3 heart" />
            }
            <div className = "discription">
                Make your life relaxed through
                {!isMobile && <br />}
                Issue Bounty    
            </div>
        </div>
        
        <div className="section4"
            style={
            isPc 
            ? {backgroundImage: `url(${img4}), url(${bg2})`}
            : {backgroundImage: `url(${bg2Mobile})`}
            }
        >
            {
            isPc 
            ? <img src={img4Phone} />
            : <img src={img4Mobile} />
            }
            
            <div className = "discription">
                Check the code comfortably
                <br />
                through IDE
                <br />
                Write your own code
            </div>
        </div>

        <div className = "footer">
            <div className="box">
                <div className="link">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="copy">
                    Copyright © 2021 ToraPod, Inc.
                </div>
            </div>
        </div>

    <GoTop />
    </div>
    );
};

export default Guide;