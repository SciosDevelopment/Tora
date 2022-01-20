import React from 'react';
import Searchicon from '../../../../img/searchNavy@2x.png'

const ChatSearch = () => {
    return (
        <div className= "chatsearch">
            <div className= "title">
                <span>Search</span>
            </div>
            <div className= "input">
                <input type= "text" />
                <img src= {Searchicon}/>
            </div>
        </div>
    );
};

export default ChatSearch;