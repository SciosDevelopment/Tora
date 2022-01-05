import React from 'react';

import ProjectBoard from './ProjectBoard'
import ProjectFeed from './ProjectFeed'
import CoinContainer from './CoinContainer';
import ProjectRead from './ProjectRead';

const MainView = () => {

    return (
        <div className="MainView">
            <div className="publishFile">
                <ProjectBoard/>
                <ProjectFeed/>
            </div>
            <CoinContainer/>
            <ProjectRead/>
        </div>
    );
};

export default MainView;