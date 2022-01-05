import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Objective from './Objective';
import IssueContent from './Board';


const Issue = () => {

    return (
        <div className= "issue2">
            <div className="issuebox">
                <Objective/>
                <IssueContent/>
            </div>
        </div>
    );
};

export default Issue;